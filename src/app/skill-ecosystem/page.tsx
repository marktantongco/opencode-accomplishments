'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/glass/glass-card';
import { skills, type Skill } from '@/lib/data/skills';
import { Compass, Search, X } from 'lucide-react';
import { useUIStore } from '@/lib/store/ui-store';

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
  "Agent Modes",
];

export default function SkillEcosystemPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = skills.filter((skill) => {
    const matchCategory = activeCategory === "All" || skill.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Zone Header */}
      <div className="border-b border-[var(--glass-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[var(--zone-discover)]/15">
                <Compass className="h-6 w-6" style={{ color: 'var(--zone-discover)' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold">
                <span style={{ color: 'var(--zone-discover)' }}>Discover</span> Zone
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Browse all {skills.length} skills across 10 categories.
            </p>
          </motion.div>

          {/* Search + Category Filters */}
          <div className="mt-6 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>

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

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-muted-foreground">No skills match your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-2 text-sm text-[var(--zone-discover)] hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + searchQuery}
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
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      layout
    >
      <GlassCard
        glow="magenta"
        variant="light"
        className="p-4 h-full"
        hoverable
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-3">
          <span
            className="text-lg mt-0.5"
            style={{ color: skill.color }}
          >
            {skill.emoji || '⚡'}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-foreground truncate">{skill.name}</h3>
            <p className={`text-xs text-muted-foreground mt-1 ${expanded ? '' : 'line-clamp-2'}`}>
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
      </GlassCard>
    </motion.div>
  );
}
