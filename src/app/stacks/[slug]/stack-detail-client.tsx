'use client';

import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Server, Layers, Lightbulb, AlertTriangle, BookOpen, Users, Zap, ExternalLink } from 'lucide-react';
import { mcpStacks } from '@/lib/data/stacks';
import { skills } from '@/lib/data/skills';
import { GlassCard } from '@/components/glass/glass-card';
import { useState, useEffect } from 'react';

export function StackDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  if (!slug) return null;

  const stack = mcpStacks.find(s => s.id === slug);
  if (!stack) return notFound();

  return <StackDetailInner stack={stack} />;
}

function StackDetailInner({ stack }: { stack: typeof mcpStacks[0] }) {
  const router = useRouter();

  const relatedSkillDetails = stack.relatedSkills
    ?.map(id => skills.find(s => s.slug === id))
    .filter(Boolean) as typeof skills | undefined;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-[var(--glass-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => router.push('/prompt-engineering')}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Build zone
            </button>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[var(--zone-build)]/15 mt-1">
                <Server className="h-6 w-6" style={{ color: 'var(--zone-build)' }} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                    {stack.name}
                  </h1>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-[var(--zone-build)]/15 text-[var(--zone-build)] border border-[var(--zone-build)]/30">
                    MCP Stack
                  </span>
                </div>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  {stack.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Servers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Server className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-build)' }} />
              Servers ({stack.servers.length})
            </h2>
            <div className="space-y-3">
              {stack.servers.map((srv, i) => (
                <motion.div
                  key={srv}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--hover-light)] border border-[var(--glass-border)]"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--zone-build)' }}
                  />
                  <span className="text-sm font-medium text-foreground">{srv}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-build)' }} />
              Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stack.useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="p-3 rounded-lg bg-[var(--hover-light)] border border-[var(--glass-border)]"
                >
                  <h3 className="text-sm font-semibold text-foreground">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{uc.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Synergy */}
          {stack.synergy.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard variant="light" className="p-6 h-full">
                <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Layers className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-build)' }} />
                  Synergy
                </h2>
                <ul className="space-y-2">
                  {stack.synergy.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[var(--zone-build)] mt-0.5 shrink-0">+</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          )}

          {/* Stacking Tips */}
          {stack.stackingTips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <GlassCard variant="light" className="p-6 h-full">
                <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-build)' }} />
                  Stacking Tips
                </h2>
                <ul className="space-y-2">
                  {stack.stackingTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[var(--zone-build)] mt-0.5 shrink-0">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          )}
        </div>

        {/* Conflicts */}
        {stack.conflicts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" style={{ color: '#FF6B35' }} aria-hidden="true" />
                Conflicts
              </h2>
              <ul className="space-y-1">
                {stack.conflicts.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[#FF6B35] mt-0.5 shrink-0">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        )}

        {/* Best For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-build)' }} />
              Best For
            </h2>
            <p className="text-muted-foreground leading-relaxed">{stack.bestFor}</p>
          </GlassCard>
        </motion.div>

        {/* Related Skills */}
        {relatedSkillDetails && relatedSkillDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-build)' }} />
                Recommended Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedSkillDetails.map(s => (
                  <button
                    key={s.id}
                    onClick={() => router.push(`/skill-ecosystem/${s.slug}`)}
                    className="text-xs px-2.5 py-1.5 rounded-full font-medium transition-colors"
                    style={{
                      backgroundColor: `${s.color}15`,
                      color: s.color,
                    }}
                  >
                    {s.emoji} {s.name}
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Go to Skills section */}
        {relatedSkillDetails && relatedSkillDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-center"
          >
            <button
              onClick={() => router.push('/skill-ecosystem')}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse all skills to pair with this stack
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
