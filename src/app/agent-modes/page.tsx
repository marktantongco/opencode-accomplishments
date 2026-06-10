'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/glass-card';
import { agentModes } from '@/lib/data/agents';
import { Zap, Brain, Lightbulb, Eye, Route, Puzzle, Ship, TreePine } from 'lucide-react';

const modeIcons = [
  <Brain key="0" className="h-8 w-8" aria-hidden="true" />,
  <Eye key="1" className="h-8 w-8" aria-hidden="true" />,
  <Route key="2" className="h-8 w-8" aria-hidden="true" />,
  <TreePine key="3" className="h-8 w-8" aria-hidden="true" />,
  <Lightbulb key="4" className="h-8 w-8" aria-hidden="true" />,
  <Ship key="5" className="h-8 w-8" aria-hidden="true" />,
  <Puzzle key="6" className="h-8 w-8" aria-hidden="true" />,
];

const glowMap = [
  'cyan', 'violet', 'lime', 'orange', 'magenta', 'lime', 'violet'
] as const;

export default function AgentModesPage() {
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
              <div className="p-2 rounded-lg bg-[var(--zone-activate)]/15">
                <Zap className="h-6 w-6" aria-hidden="true" style={{ color: 'var(--zone-activate)' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                <span style={{ color: 'var(--zone-activate)' }}>Activate</span> Zone
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              7 cognitive Agent Modes — each a distinct thinking framework for different types of work.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Agent Modes Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentModes.map((mode, i) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/agent-modes/${mode.id}`} className="block h-full">
                <GlassCard glow={glowMap[i]} variant="medium" className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{mode.emoji}</div>
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${mode.color}15` }}
                    >
                      {modeIcons[i]}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{mode.name}</h3>
                  <p className="text-sm font-medium mt-1" style={{ color: mode.color }}>
                    {mode.thinkingStyle}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 flex-1">
                    {mode.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium uppercase tracking-wider" style={{ color: mode.color }}>
                        Best For
                      </span>
                      <br />
                      {mode.bestFor}
                    </p>
                  </div>
                  <div className="mt-3">
                    <code
                      className="text-xs px-2 py-1 rounded font-mono"
                      style={{
                        backgroundColor: `${mode.color}10`,
                        color: mode.color,
                        border: `1px solid ${mode.color}20`,
                      }}
                    >
                      {mode.invokeCommand}
                    </code>
                  </div>
                </GlassCard>
              </Link>
              </motion.div>
          ))}
        </div>

        {/* Thinking Framework Table */}
        <motion.div
          className="mt-16 glass-strong rounded-2xl p-8 border border-[var(--glass-border)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Cognitive Framework
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--glass-border)]">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Mode</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Thinking Style</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium hidden md:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {agentModes.map((mode) => (
                  <tr key={mode.id} className="border-b border-[var(--glass-border)]/50 last:border-0">
                    <td className="py-3 px-4">
                      <span className="text-foreground font-medium">{mode.emoji} {mode.name}</span>
                    </td>
                    <td className="py-3 px-4" style={{ color: mode.color }}>
                      {mode.thinkingStyle}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">
                      {mode.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
