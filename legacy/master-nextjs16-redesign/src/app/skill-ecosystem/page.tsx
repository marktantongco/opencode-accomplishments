'use client';

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassCard } from '@/components/glass/glass-card'
import { skills, type Skill, getSkillInstallUrl } from '@/lib/data/skills'
import { useBasketStore } from '@/lib/store/basket-store'
import { Compass, Search, X, Copy, Check, Sparkles, Zap, Plus, Minus } from 'lucide-react'

const categories = [
  "All",
  "Design & UI",
  "Reasoning",
  "Development",
  "Content",
  "Strategy",
  "System",
  "Data & Web",
  "Creative",
  "MCP Servers",
];

const tierConfig = {
  foundation: { label: 'Foundation', color: '#08F7FE', icon: Sparkles },
  interactive: { label: 'Interactive', color: '#FF6B35', icon: Zap },
};

export default function SkillEcosystemPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<'all' | 'foundation' | 'interactive'>('all');

  const filtered = skills.filter((skill) => {
    const matchCategory = activeCategory === "All" || skill.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchTier = tierFilter === 'all' || skill.tier === tierFilter;
    return matchCategory && matchSearch && matchTier;
  });

  const foundationCount = skills.filter(s => s.tier === 'foundation').length;
  const interactiveCount = skills.filter(s => s.tier === 'interactive').length;

  return (
    <div className="min-h-screen">
      <div className="border-b border-[var(--glass-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[var(--zone-discover)]/15">
                <Compass className="h-6 w-6" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold">
                <span style={{ color: 'var(--zone-discover)' }}>Discover</span> Zone
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Browse all {skills.length} skills across {categories.length - 1} categories.
            </p>
          </motion.div>

          <div className="mt-6 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-10 rounded-lg bg-[var(--hover-light)] border border-[var(--glass-border)] text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-[var(--zone-discover)] focus:ring-1 focus:ring-[var(--zone-discover)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Tier Filter */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'foundation', 'interactive'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tier)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                    tierFilter === tier
                      ? 'bg-[var(--zone-discover)]/15 text-[var(--zone-discover)] border-[var(--zone-discover)]/30'
                      : 'bg-transparent text-muted-foreground border-[var(--glass-border)] hover:border-[var(--glass-border-hover)]'
                  }`}
                >
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                  {tier !== 'all' && ` (${tier === 'foundation' ? foundationCount : interactiveCount})`}
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                    activeCategory === cat
                      ? 'bg-[var(--zone-discover)]/15 text-[var(--zone-discover)] border-[var(--zone-discover)]/30'
                      : 'bg-transparent text-muted-foreground border-[var(--glass-border)] hover:border-[var(--glass-border-hover)]'
                  }`}
                >
                  {cat} {cat !== "All" && `(${skills.filter(s => s.category === cat).length})`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <motion.p
            key={`count-${tierFilter}-${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            Showing{' '}
            <span className="text-foreground font-medium">{filtered.length}</span>
            {' '}of {skills.length} skills
            {tierFilter !== 'all' && (
              <>
                {' — '}
                <span style={{ color: tierConfig[tierFilter].color }}>
                  {tierConfig[tierFilter].label}
                </span> tier
              </>
            )}
            {tierFilter !== 'all' && activeCategory !== "All" && (
              <>
                {' · '}
                <span>{activeCategory}</span>
              </>
            )}
          </motion.p>
          {(tierFilter !== 'all' || activeCategory !== "All" || searchQuery) && (
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); setTierFilter('all'); }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
            >
              Reset all
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-muted-foreground">No skills match your filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); setTierFilter('all'); }}
                className="mt-2 text-sm text-[var(--zone-discover)] hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${activeCategory}-${searchQuery}-${tierFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((skill, i) => (
                <SkillCard key={skill.id} skill={skill} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [copied, setCopied] = useState(false)
  const { addItem, removeItem, isInBasket } = useBasketStore()
  const inBasket = isInBasket(skill.id)
  const installCmd = getSkillInstallUrl(skill.slug)
  const detailUrl = `/skill-ecosystem/${skill.slug}`
  const tier = tierConfig[skill.tier]
  const TierIcon = tier.icon

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    await navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleBasketToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (inBasket) {
      removeItem(skill.id)
    } else {
      addItem(skill)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      layout
    >
      <Link
        href={detailUrl}
        className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded-xl"
      >
        <GlassCard
          glow="magenta"
          variant="light"
          className="p-4 h-full flex flex-col"
          hoverable
        >
          <div className="flex items-start gap-3">
            <span
              className="text-lg mt-0.5"
              style={{ color: skill.color }}
            >
              {skill.emoji || '⚡'}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-sm font-semibold text-foreground truncate">{skill.name}</h3>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 inline-flex items-center gap-1"
                  style={{
                    backgroundColor: `${tier.color}18`,
                    color: tier.color,
                    border: `1px solid ${tier.color}30`,
                  }}
                >
                  <TierIcon className="h-2.5 w-2.5" aria-hidden="true" />
                  {tier.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {skill.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono truncate">
              {installCmd}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleBasketToggle}
                className={`shrink-0 flex items-center gap-1 text-xs px-2 py-1 rounded-md border transition-colors ${
                  inBasket
                    ? 'border-green-500/40 text-green-500 bg-green-500/10 hover:bg-green-500/20'
                    : 'border-[var(--glass-border)] text-muted-foreground hover:text-foreground hover:bg-[var(--hover-light)]'
                }`}
              >
                {inBasket ? <><Minus className="h-3 w-3" aria-hidden="true" /> Added</> : <><Plus className="h-3 w-3" aria-hidden="true" /> Basket</>}
              </button>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-[var(--glass-border)] text-muted-foreground hover:text-foreground hover:bg-[var(--hover-light)] transition-colors"
              >
                {copied ? <><Check className="h-3 w-3" aria-hidden="true" /> Copied</> : <><Copy className="h-3 w-3" aria-hidden="true" /> Copy</>}
              </button>
            </div>
          </div>
          {copied && (
            <p className="text-xs text-green-500 mt-2" role="status" aria-live="polite">Copied to clipboard!</p>
          )}
        </GlassCard>
      </Link>
    </motion.div>
  );
}
