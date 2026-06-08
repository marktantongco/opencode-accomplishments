'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/glass-card';
import { AnimatedContainer } from '@/components/motion/animated-container';
import { zones, type Zone } from '@/lib/spatial';
import { skills } from '@/lib/data/skills';
import { agentModes } from '@/lib/data/agents';
import { mcpStacks } from '@/lib/data/stacks';
import { ArrowRight, Sparkles, Wrench, Compass, BookOpen, Zap } from 'lucide-react';

const zoneIcons: Record<Zone, React.ReactNode> = {
  home: <Sparkles className='h-5 w-5' />,
  build: <Wrench className='h-5 w-5' />,
  discover: <Compass className='h-5 w-5' />,
  playbook: <BookOpen className='h-5 w-5' />,
  activate: <Zap className='h-5 w-5' />,
};

const glowMap: Record<Zone, 'cyan' | 'lime' | 'magenta' | 'violet' | 'orange'> = {
  home: 'cyan',
  build: 'lime',
  discover: 'magenta',
  playbook: 'violet',
  activate: 'orange',
};

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      {/* Hero */}
      <AnimatedContainer className='max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center'>
        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className='text-[var(--zone-home)]'>AI Agent</span>
          <span className='text-foreground'> Skill Ecosystem</span>
        </motion.h1>
        <motion.p
          className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Explore 48 curated skills, 7 cognitive agent modes, and 8 pre-built MCP stacks.
        </motion.p>
        <motion.div
          className='mt-10 flex flex-wrap justify-center gap-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: 'Skills', value: skills.length, color: 'var(--zone-home)' },
            { label: 'Categories', value: 10, color: 'var(--zone-build)' },
            { label: 'Agent Modes', value: agentModes.length, color: 'var(--zone-activate)' },
            { label: 'MCP Stacks', value: mcpStacks.length, color: 'var(--zone-playbook)' }
          ].map((stat) => (
            <div key={stat.label} className='text-center'>
              <p className='text-3xl font-bold font-mono' style={{ color: stat.color }}>{stat.value}</p>
              <p className='text-sm text-muted-foreground mt-1'>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </AnimatedContainer>

      {/* 5-Panel Grid */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 pb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {(['build', 'discover', 'playbook', 'activate'] as Zone[]).map((id, i) => {
            const zone = zones[id];
            return (
              <motion.div key={id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.12 }}>
                <Link href={zone.route}>
                  <GlassCard glow={glowMap[id]} variant='medium' className='h-full p-6 flex flex-col'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='p-2 rounded-lg' style={{ backgroundColor: zone.accentColor + '15' }}>
                        {zoneIcons[id]}
                      </div>
                      <ArrowRight className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>{zone.label}</h3>
                    <p className='text-sm text-muted-foreground mt-1 flex-1'>{zone.description}</p>
                    <div className='mt-4 text-xs font-mono' style={{ color: zone.accentColor }}>Explore →</div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
