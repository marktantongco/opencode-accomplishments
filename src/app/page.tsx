'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/glass-card';
import { AnimatedContainer } from '@/components/motion/animated-container';
import { zones, type Zone } from '@/lib/spatial';
import { skills } from '@/lib/data/skills';
import { agentModes } from '@/lib/data/agents';
import { mcpStacks } from '@/lib/data/stacks';
import { communityUseCases } from '@/lib/data/community-use-cases';
import { ArrowRight, Sparkles, Wrench, Compass, BookOpen, Zap, Layers, Server, Brain, ExternalLink, Building2, Headset, Palette, Cpu, Database, Blocks, Handshake, Truck, Landmark, Cog, Globe, Users } from 'lucide-react';

const zoneIcons: Record<Zone, React.ReactNode> = {
  home: <Sparkles className='h-5 w-5' aria-hidden='true' />,
  build: <Wrench className='h-5 w-5' aria-hidden='true' />,
  discover: <Compass className='h-5 w-5' aria-hidden='true' />,
  playbook: <BookOpen className='h-5 w-5' aria-hidden='true' />,
  activate: <Zap className='h-5 w-5' aria-hidden='true' />,
};

const glowMap: Record<Zone, 'cyan' | 'lime' | 'magenta' | 'violet' | 'orange'> = {
  home: 'cyan',
  build: 'lime',
  discover: 'magenta',
  playbook: 'violet',
  activate: 'orange',
};

const totalCategories = [...new Set(skills.map(s => s.category))].length;

const heroStats = [
  { label: 'Skills', value: skills.length, color: 'var(--zone-home)', icon: Layers, subtitle: 'Curated agent skills' },
  { label: 'Categories', value: totalCategories, color: 'var(--zone-build)', icon: Server, subtitle: 'Skill categories' },
  { label: 'Agent Modes', value: agentModes.length, color: 'var(--zone-activate)', icon: Brain, subtitle: 'Cognitive modes' },
  { label: 'MCP Stacks', value: mcpStacks.length, color: 'var(--zone-playbook)', icon: Wrench, subtitle: 'Pre-built stacks' },
];

const industryIcons: Record<string, React.ReactNode> = {
  'SaaS / DevOps': <Cog className="h-4 w-4" aria-hidden="true" />,
  'Customer Support': <Headset className="h-4 w-4" aria-hidden="true" />,
  'Design / Frontend': <Palette className="h-4 w-4" aria-hidden="true" />,
  'DevOps / Infrastructure': <Cpu className="h-4 w-4" aria-hidden="true" />,
  'Fintech / Analytics': <Database className="h-4 w-4" aria-hidden="true" />,
  'AI Infrastructure': <Blocks className="h-4 w-4" aria-hidden="true" />,
  'Sales / CRM': <Handshake className="h-4 w-4" aria-hidden="true" />,
  'E-Commerce / Logistics': <Truck className="h-4 w-4" aria-hidden="true" />,
  'Banking / Enterprise': <Landmark className="h-4 w-4" aria-hidden="true" />,
  'DevOps / CI-CD': <Cog className="h-4 w-4" aria-hidden="true" />,
  'Enterprise IT': <Building2 className="h-4 w-4" aria-hidden="true" />,
  'Consulting / Research': <Globe className="h-4 w-4" aria-hidden="true" />,
};

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      {/* Hero */}
      <AnimatedContainer className='max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--selected-light)] border border-[var(--glass-border)] text-xs text-muted-foreground mb-6'>
            <Sparkles className='h-3 w-3' aria-hidden='true' style={{ color: 'var(--zone-home)' }} />
            AI Agent Skill Ecosystem
          </div>
        </motion.div>

        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className='text-[var(--zone-home)]'>AI Agent</span>
          <span className='text-foreground'> Skill Ecosystem</span>
        </motion.h1>
        <motion.p
          className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore {skills.length} curated skills, {agentModes.length} cognitive agent modes,
          and {mcpStacks.length} pre-built MCP stacks. Build smarter AI workflows.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className='mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {heroStats.map((stat) => (
            <GlassCard key={stat.label} variant='light' className='p-4 text-center' glow='none'>
              <stat.icon
                className='h-5 w-5 mx-auto mb-2'
                aria-hidden='true'
                style={{ color: stat.color }}
              />
              <p className='text-2xl sm:text-3xl font-bold font-mono' style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className='text-xs text-muted-foreground mt-1'>{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </AnimatedContainer>

      {/* Zone Grid */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 pb-16'>
        <motion.div
          className='text-center mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className='text-sm text-muted-foreground uppercase tracking-widest font-medium'>
            Explore by Zone
          </p>
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {(['build', 'discover', 'playbook', 'activate'] as Zone[]).map((id, i) => {
            const zone = zones[id];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link href={zone.route}>
                  <GlassCard glow={glowMap[id]} variant='medium' className='h-full p-6 flex flex-col group'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='p-2 rounded-lg' style={{ backgroundColor: zone.accentColor + '15' }}>
                        {zoneIcons[id]}
                      </div>
                      <ArrowRight
                        className='h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5'
                        aria-hidden='true'
                      />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>{zone.label}</h3>
                    <p className='text-sm text-muted-foreground mt-1 flex-1'>{zone.description}</p>
                    <div className='mt-4 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity' style={{ color: zone.accentColor }}>
                      Explore {zone.label} {'->'}
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Community Use Cases Section */}
      <div className='border-t border-[var(--glass-border)]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-16'>
          <motion.div
            className='text-center mb-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--selected-light)] border border-[var(--glass-border)] text-xs text-muted-foreground mb-4'>
              <Users className='h-3 w-3' aria-hidden='true' style={{ color: 'var(--zone-home)' }} />
              Community
            </div>
            <h2 className='text-2xl sm:text-3xl font-display font-bold text-foreground'>
              Real-World <span className='text-[var(--zone-home)]'>MCP Use Cases</span>
            </h2>
            <p className='mt-3 text-muted-foreground max-w-2xl mx-auto'>
              Production-tested MCP stack configurations from the community and industry leaders.
              Each use case pairs specific skill sets with MCP server stacks for real results.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {communityUseCases.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.04 }}
              >
                <GlassCard variant='light' className='p-5 h-full flex flex-col'>
                  <div className='flex items-start gap-3 mb-3'>
                    <div className='p-1.5 rounded-lg shrink-0 bg-[var(--selected-light)]'>
                      {industryIcons[uc.industry] || <Building2 className='h-4 w-4' aria-hidden='true' style={{ color: 'var(--zone-home)' }} />}
                    </div>
                    <div className='min-w-0'>
                      <h3 className='text-sm font-semibold text-foreground'>{uc.title}</h3>
                      <span className='text-[10px] text-muted-foreground font-medium'>{uc.industry}</span>
                    </div>
                  </div>

                  <p className='text-xs text-muted-foreground leading-relaxed flex-1'>
                    {uc.description}
                  </p>

                  {/* Stacks used */}
                  {uc.stacks.length > 0 && (
                    <div className='mt-3 pt-3 border-t border-[var(--glass-border)]'>
                      <div className='flex flex-wrap gap-1.5'>
                        {uc.stacks.map(stackId => {
                          const stack = mcpStacks.find(s => s.id === stackId);
                          return stack ? (
                            <Link
                              key={stackId}
                              href={`/stacks/${stackId}`}
                              className='text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--zone-build)]/10 text-[var(--zone-build)] border border-[var(--zone-build)]/20 hover:bg-[var(--zone-build)]/20 transition-colors'
                            >
                              {stack.name}
                            </Link>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Source */}
                  <div className='mt-2 flex items-center justify-between'>
                    <span className='text-[10px] text-muted-foreground'>
                      {uc.source}
                    </span>
                    <a
                      href={uc.sourceUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[10px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                    >
                      Source <ExternalLink className='h-2.5 w-2.5' aria-hidden='true' />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
