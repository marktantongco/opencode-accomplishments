import { skills, type Skill } from '@/lib/data/skills'
import { agentModes, type AgentMode } from '@/lib/data/agents'

export interface SearchResult {
  id: string
  label: string
  description: string
  route: string
  type: 'skill' | 'agent' | 'page'
  category?: string
  tier?: string
  emoji?: string
  color?: string
  matchType?: 'exact' | 'startsWith' | 'includes' | 'description'
  score?: number
}

interface IndexedItem {
  id: string
  label: string
  description: string
  route: string
  type: 'skill' | 'agent' | 'page'
  category?: string
  tier?: string
  emoji?: string
  color?: string
  keywords: string[]
}

const staticPages: IndexedItem[] = [
  { id: 'home', label: 'Home', description: 'Main landing page — skill showcase and agent modes', route: '/', type: 'page', keywords: ['home', 'landing', 'main'] },
  { id: 'ecosystem', label: 'Skill Ecosystem', description: 'Browse all skills across every category and tier', route: '/skill-ecosystem', type: 'page', keywords: ['skills', 'ecosystem', 'discover', 'browse'] },
  { id: 'agent-modes', label: 'Agent Modes', description: 'Explore thinking styles and agent personalities', route: '/agent-modes', type: 'page', keywords: ['agents', 'modes', 'thinking', 'personas'] },
  { id: 'prompt-engineering', label: 'Prompt Engineering', description: 'Prompt engineering guide, templates, and best practices', route: '/prompt-engineering', type: 'page', keywords: ['prompts', 'engineering', 'templates'] },
  { id: 'accomplishments', label: 'Accomplishments', description: 'Project milestones, changelog, and achievements', route: '/accomplishments', type: 'page', keywords: ['accomplishments', 'changelog', 'milestones'] },
]

function buildIndexedItems(): IndexedItem[] {
  const skillItems: IndexedItem[] = skills.map((s) => ({
    id: s.id,
    label: s.name,
    description: s.description,
    route: `/skill-ecosystem/${s.slug}`,
    type: 'skill' as const,
    category: s.category,
    tier: s.tier,
    emoji: s.emoji,
    color: s.color,
    keywords: [s.name, s.slug, s.category, ...s.tags.map(t => t.replace(/-/g, ' '))],
  }))

  const agentItems: IndexedItem[] = agentModes.map((a) => ({
    id: a.id,
    label: `${a.emoji} ${a.name}`,
    description: a.thinkingStyle,
    route: `/agent-modes/${a.id}`,
    type: 'agent' as const,
    category: 'Agent',
    tier: undefined,
    emoji: a.emoji,
    color: a.color,
    keywords: [a.name, a.animal, a.thinkingStyle, a.bestFor],
  }))

  return [...skillItems, ...agentItems, ...staticPages]
}

export class SearchIndex {
  private items: IndexedItem[]
  public totalCount: number

  constructor() {
    this.items = buildIndexedItems()
    this.totalCount = this.items.length
  }

  /**
   * Search the index with scored relevance ranking.
   * Supports multi-word queries — each word is scored independently and summed.
   */
  search(
    query: string,
    options?: {
      limit?: number
      type?: 'skill' | 'agent' | 'page'
      category?: string
      tier?: string
    }
  ): SearchResult[] {
    const normalized = query.toLowerCase().trim()
    const words = normalized.split(/\s+/).filter(Boolean)

    if (words.length === 0) {
      // Return all items (sorted, limited) when no query
      return this.applyFilters(this.items.map((item) => this.toResult(item)), options)
        .slice(0, options?.limit ?? 20)
    }

    const scored: SearchResult[] = []

    for (const item of this.items) {
      let totalScore = 0
      let bestMatchType: SearchResult['matchType'] = 'includes'

      for (const word of words) {
        const labelLower = item.label.toLowerCase()
        const descLower = item.description.toLowerCase()
        const kwLower = item.keywords.map(k => k.toLowerCase())

        let wordScore = 0
        let wordMatchType: SearchResult['matchType'] = 'includes'

        // Exact name match
        if (labelLower === word) {
          wordScore = 100
          wordMatchType = 'exact'
        }
        // Name starts with
        else if (labelLower.startsWith(word)) {
          wordScore = 50
          wordMatchType = 'startsWith'
        }
        // Name includes
        else if (labelLower.includes(word)) {
          wordScore = 30
          wordMatchType = 'includes'
        }
        // Keyword match
        else if (kwLower.some(k => k.includes(word))) {
          wordScore = 20
          wordMatchType = 'includes'
        }
        // Description match
        else if (descLower.includes(word)) {
          wordScore = 10
          wordMatchType = 'description'
        }

        totalScore += wordScore
        if (wordMatchType === 'exact' || (wordMatchType === 'startsWith' && bestMatchType !== 'exact')) {
          bestMatchType = wordMatchType
        }
      }

      if (totalScore > 0) {
        const result = this.toResult(item)
        result.score = totalScore
        result.matchType = bestMatchType
        scored.push(result)
      }
    }

    // Sort by score descending
    scored.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))

    return this.applyFilters(scored, options).slice(0, options?.limit ?? 20)
  }

  getById(id: string): SearchResult | undefined {
    const item = this.items.find(i => i.id === id)
    return item ? this.toResult(item) : undefined
  }

  getByType(type: 'skill' | 'agent' | 'page'): SearchResult[] {
    return this.items
      .filter(i => i.type === type)
      .map(i => this.toResult(i))
  }

  private toResult(item: IndexedItem): SearchResult {
    return {
      id: item.id,
      label: item.label,
      description: item.description,
      route: item.route,
      type: item.type,
      category: item.category,
      tier: item.tier,
      emoji: item.emoji,
      color: item.color,
    }
  }

  private applyFilters(
    results: SearchResult[],
    options?: { type?: string; category?: string; tier?: string }
  ): SearchResult[] {
    let filtered = results
    if (options?.type) {
      filtered = filtered.filter(r => r.type === options.type)
    }
    if (options?.category) {
      filtered = filtered.filter(r => r.category?.toLowerCase() === options.category!.toLowerCase())
    }
    if (options?.tier) {
      filtered = filtered.filter(r => r.tier === options.tier)
    }
    return filtered
  }
}

/** Singleton search index instance — import this in components. */
export const searchIndex = new SearchIndex()
