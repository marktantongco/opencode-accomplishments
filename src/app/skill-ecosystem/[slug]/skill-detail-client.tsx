'use client';

import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, Terminal, Link as LinkIcon, BookOpen, Users, Puzzle, Lightbulb, ExternalLink } from 'lucide-react';
import { skills, getSkillInstallUrl } from '@/lib/data/skills';
import { mcpStacks } from '@/lib/data/stacks';
import { GlassCard } from '@/components/glass/glass-card';
import { useState, useEffect } from 'react';

const tierConfig = {
  foundation: { label: 'Foundation', color: '#08F7FE', description: 'Core skill available to all agents' },
  interactive: { label: 'Interactive', color: '#FF6B35', description: 'Requires active prompting and iteration' },
};

export function SkillDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  if (!slug) return null;

  const skill = skills.find(s => s.slug === slug);
  if (!skill) return notFound();

  return <SkillDetailInner skill={skill} />;
}

function SkillDetailInner({ skill }: { skill: typeof skills[0] }) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const installCmd = getSkillInstallUrl(skill.slug);
  const tier = tierConfig[skill.tier];

  const relatedSkillDetails = skill.relatedSkills
    ?.map(id => skills.find(s => s.slug === id))
    .filter(Boolean) as typeof skills | undefined;

  const synergySkillDetails = skill.synergySkills
    ?.map(id => skills.find(s => s.slug === id))
    .filter(Boolean) as typeof skills | undefined;

  const partnerStackDetails = skill.partnerStacks
    ?.map(id => mcpStacks.find(s => s.id === id))
    .filter(Boolean) as typeof mcpStacks | undefined;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="border-b border-[var(--glass-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => router.push('/skill-ecosystem')}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Discover zone
            </button>

            <div className="flex items-start gap-4">
              <span className="text-3xl mt-1" style={{ color: skill.color }}>
                {skill.emoji || '⚡'}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                    {skill.name}
                  </h1>
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: `${tier.color}20`,
                      color: tier.color,
                      border: `1px solid ${tier.color}40`,
                    }}
                    title={tier.description}
                  >
                    {tier.label}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                    }}
                  >
                    {skill.category}
                  </span>
                  {skill.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--hover-light)] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
            <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
          </GlassCard>
        </motion.div>

        {/* Install */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <GlassCard variant="light" className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Terminal className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
              Install
            </h2>
            <div className="flex items-center gap-2">
              <code className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--hover-light)] text-sm font-mono text-foreground border border-[var(--glass-border)]">
                {installCmd}
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

        {/* Usage */}
        {skill.usage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
                When to Use
              </h2>
              <p className="text-muted-foreground leading-relaxed">{skill.usage}</p>
            </GlassCard>
          </motion.div>
        )}

        {/* Resource Links */}
        {skill.resourceLinks && skill.resourceLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <LinkIcon className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
                Resources
              </h2>
              <ul className="space-y-2">
                {skill.resourceLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Related Skills */}
          {relatedSkillDetails && relatedSkillDetails.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard variant="light" className="p-6 h-full">
                <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
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

          {/* Synergy Skills */}
          {synergySkillDetails && synergySkillDetails.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <GlassCard variant="light" className="p-6 h-full">
                <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Puzzle className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
                  Synergy Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {synergySkillDetails.map(s => (
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

        {/* Partner Stacks */}
        {partnerStackDetails && partnerStackDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
                Partner MCP Stacks
              </h2>
              <div className="flex flex-wrap gap-2">
                {partnerStackDetails.map(s => (
                  <span
                    key={s.id}
                    className="text-xs px-2.5 py-1.5 rounded-full font-medium"
                    style={{
                      backgroundColor: `${skill.color}10`,
                      color: skill.color,
                      border: `1px solid ${skill.color}30`,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* SKILL.md Preview */}
        {skill.skillMdContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <GlassCard variant="light" className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--zone-discover)' }} />
                SKILL.md Preview
              </h2>
              <div className="max-h-96 overflow-y-auto rounded-lg bg-[var(--hover-light)] p-4 border border-[var(--glass-border)]">
                <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">
                  {skill.skillMdContent}
                </pre>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}
