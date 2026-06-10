'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/glass-card';
import { AnimatedContainer } from '@/components/motion/animated-container';
import { BookOpen, GitCommit, Code, Terminal, Settings, Activity } from 'lucide-react';

const timeline = [
  { date: '2026-05-26', title: 'v6.0.0 — Interactive Accomplishments', description: 'Data-driven skills page with debounced search, GSAP/ScrollTrigger animations, light/dark theme, scroll progress, keyboard nav, animated stat counters, skeleton loading states, and cross-page nav banner.' },
  { date: '2026-05-19', title: 'v5.0.0 — Agent Modes', description: 'Added 7 Agent Modes (Rabbit, Owl, Ant, Eagle, Dolphin, Beaver, Elephant) with #FF6B35 accent. Fixed substr() deprecation, added robots meta + favicon. Grew from 41 to 48 skills, 9 to 10 categories.' },
  { date: '2026-05-19', title: 'v4.0.0 — MCP Servers', description: 'Added MCP Servers category (4 skills). Removed nvidia-build. Added stacks.json + mcp-registry.json. 38 to 41 skills, 8 to 9 categories.' },
  { date: '2026-05-06', title: 'v3.0.0 — Neo-Brutalist Redesign', description: 'Complete neo-brutalist redesign with GSAP 3, Web Components, JSON-LD, URL endpoints, embed mode, palette API.' },
  { date: '2026-05-19', title: 'v4.0.0 — MCP Servers', description: 'Added MCP Servers category (4 skills). Removed nvidia-build. Added stacks.json + mcp-registry.json.' },
  { date: '2026-05-19', title: 'v5.0.0 — Agent Modes', description: '7 Agent Modes added.' },
];

const stats = [
  { label: 'Lines of System Prompt', value: '2,500+', icon: Code },
  { label: 'Skills Created', value: '48', icon: Activity },
  { label: 'Git Commits', value: '150+', icon: GitCommit },
  { label: 'Config Files', value: '12', icon: Settings },
  { label: 'Terminal Sessions', value: '500+', icon: Terminal },
];

const tabs = ['Overview', 'Timeline', 'Skills Built', 'Config', 'Terminal'];

export default function AccomplishmentsPage() {
  const [activeTab, setActiveTab] = useState('Overview');

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
              <div className="p-2 rounded-lg bg-[var(--zone-playbook)]/15">
                <BookOpen className="h-6 w-6" aria-hidden="true" style={{ color: 'var(--zone-playbook)' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                <span style={{ color: 'var(--zone-playbook)' }}>Playbook</span> Zone
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The full-stack dev journey — skills built, milestones hit, and the evolution of the ecosystem.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard glow="violet" variant="light" className="p-4 text-center">
                <stat.icon className="h-5 w-5 mx-auto mb-2" aria-hidden="true" style={{ color: 'var(--zone-playbook)' }} />
                <p className="text-2xl font-bold font-mono text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-[var(--zone-playbook)]/15 text-[var(--zone-playbook)] border border-[var(--zone-playbook)]/30'
                  : 'text-muted-foreground hover:text-foreground border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {activeTab === 'Timeline' && (
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--glass-border)]" />
            <div className="space-y-8">
              {timeline.map((entry, i) => (
                <motion.div
                  key={entry.title + i}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--zone-playbook)',
                    }}
                  />
                  <GlassCard glow="violet" variant="light" className="p-4">
                    <p className="text-xs font-mono text-muted-foreground">{entry.date}</p>
                    <h3 className="text-base font-semibold text-foreground mt-1">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === 'Overview' && (
          <div className="glass-strong rounded-2xl p-8 border border-[var(--glass-border)]">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              The Journey So Far
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This project started as a simple skills directory and evolved into a full AI agent
              ecosystem showcase. From static HTML to a kinetic, glassmorphic Next.js application,
              each version brought new capabilities. The journey spans 48 curated skills, 7 cognitive
              agent modes, 8 pre-built MCP stacks, and a registry of 78 MCP servers.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Current Version', value: 'v7.0.0' },
                { label: 'Total Skills', value: '48' },
                { label: 'Categories', value: '10' },
                { label: 'Agent Modes', value: '7' },
                { label: 'MCP Stacks', value: '8' },
                { label: 'MCP Servers in Registry', value: '78' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-[var(--glass-border)]/50">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-mono font-bold" style={{ color: 'var(--zone-playbook)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder tabs */}
        {(activeTab === 'Skills Built' || activeTab === 'Config' || activeTab === 'Terminal') && (
          <div className="glass-strong rounded-2xl p-8 border border-[var(--glass-border)] text-center">
            <p className="text-muted-foreground">
              {activeTab} content coming soon. Navigate to other zones to explore skills, agent modes, and stacks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
