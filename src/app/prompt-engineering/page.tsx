'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/glass-card';
import { AnimatedContainer } from '@/components/motion/animated-container';
import { skillCategories } from '@/lib/data/skills';
import { mcpStacks } from '@/lib/data/stacks';
import { Wrench, Server, Layers, Terminal } from 'lucide-react';

const categoryNames = [
  "Development", "MCP Servers", "System", "Data & Web"
];

export default function BuildZonePage() {
  const devSkills = skillCategories.filter(s => categoryNames.includes(s.name));

  return (
    <div className="min-h-screen">
      {/* Zone Header */}
      <div className="border-b border-[var(--glass-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[var(--zone-build)]/15">
                <Wrench className="h-6 w-6" style={{ color: 'var(--zone-build)' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                <span style={{ color: 'var(--zone-build)' }}>Build</span> Zone
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technical skills, MCP stacks, and system tools for building production-ready AI agent workflows.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* MCP Stacks */}
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Server className="h-5 w-5" style={{ color: 'var(--zone-build)' }} />
            Pre-Built MCP Stacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mcpStacks.map((stack, i) => (
              <motion.div
                key={stack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard glow="lime" variant="light" className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{stack.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{stack.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stack.servers.map((srv) => (
                      <span key={srv} className="text-xs px-2 py-1 rounded-full bg-[var(--zone-build)]/10 text-[var(--zone-build)] border border-[var(--zone-build)]/20">
                        {srv}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    <span className="font-medium">Best for:</span> {stack.bestFor}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skill Categories */}
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Layers className="h-5 w-5" style={{ color: 'var(--zone-build)' }} />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {devSkills.map((cat) =>
              cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard glow="lime" variant="light" className="p-4 h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: skill.color }} />
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{skill.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{skill.description}</p>
                        <span className="inline-block mt-2 text-xs px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
                          {cat.name}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
