'use client';

import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, Terminal, BookOpen, Puzzle, Lightbulb } from 'lucide-react';
import { agentModes } from '@/lib/data/agents';
import { skills } from '@/lib/data/skills';
import { GlassCard } from '@/components/glass/glass-card';
import { useState, useEffect } from 'react';

export function AgentModeDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  if (!slug) return null;

  const mode = agentModes.find(m => m.id === slug);
  if (!mode) return notFound();

  return <AgentModeDetailInner mode={mode} />;
}

function AgentModeDetailInner({ mode }: { mode: typeof agentModes[0] }) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const cmd = mode.invokeCommand.startsWith('/') ? mode.invokeCommand : `/${mode.id}`;

  const relatedSkillDetails = mode.relatedSkills
    ?.map(id => skills.find(s => s.slug === id))
    .filter(Boolean) as typeof skills | undefined;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="border-b border-[var(--glass-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => router.push('/agent-modes')}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Activate zone
            </button>

            <div className="flex items-start gap-4">
              <span className="text-4xl mt-1">{mode.emoji}</span>
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                  {mode.name}
                </h1>
                <p className="text-base mt-2 font-medium" style={{ color: mode.color }}>
                  {mode.thinkingStyle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{mode.description}</p>
          </GlassCard>
        </motion.div>

        {/* Best For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-activate)' }} />
              Best For
            </h2>
            <p className="text-muted-foreground leading-relaxed">{mode.bestFor}</p>
          </GlassCard>
        </motion.div>

        {/* Invoke Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Terminal className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-activate)' }} />
              Invoke
            </h2>
            <div className="flex items-center gap-2">
              <code className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--hover-light)] text-sm font-mono text-foreground border border-[var(--glass-border)]">
                {cmd}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 px-3 py-2.5 rounded-lg border border-[var(--glass-border)] bg-[var(--hover-light)] hover:bg-[var(--selected-light)] text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-500 mt-2" role="status" aria-live="polite">Copied to clipboard!</p>
            )}
          </GlassCard>
        </motion.div>

        {/* Use Cases */}
        {mode.useCases && mode.useCases.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-activate)' }} />
                Use Cases
              </h2>
              <div className="space-y-3">
                {mode.useCases.map((uc, i) => (
                  <div key={i} className="pb-3 border-b border-[var(--glass-border)] last:border-0 last:pb-0">
                    <h3 className="text-sm font-medium text-foreground">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{uc.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Synergy Modes */}
        {mode.synergyModes && mode.synergyModes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Puzzle className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-activate)' }} />
                Synergy Modes
              </h2>
              <div className="flex flex-wrap gap-2">
                {mode.synergyModes.map(synId => {
                  const synMode = agentModes.find(m => m.id === synId);
                  if (!synMode) return null;
                  return (
                    <button
                      key={synId}
                      onClick={() => router.push(`/agent-modes/${synId}`)}
                      className="text-xs px-2.5 py-1.5 rounded-full font-medium transition-colors"
                      style={{
                        backgroundColor: `${synMode.color}15`,
                        color: synMode.color,
                      }}
                    >
                      {synMode.emoji} {synMode.name}
                    </button>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Related Skills */}
        {relatedSkillDetails && relatedSkillDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-activate)' }} />
                Related Skills
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
      </div>
    </div>
  );
}
