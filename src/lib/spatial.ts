/**
 * Spatial Architecture — 4-Layer Depth Model
 *
 * The site is built on a spatial metaphor with 4 depth layers:
 * Layer 1 (Atmosphere): Background ambient effects, particles, gradients
 * Layer 2 (Foundation): Glass panels, navigation, zones, cards
 * Layer 3 (Interactive): Buttons, inputs, hover states, clickable elements
 * Layer 4 (Overlay): Modals, command palette, tooltips, dropdowns
 */

// ─── Zone Types ────────────────────────────────────────────────────

export type Zone = 'home' | 'build' | 'discover' | 'playbook' | 'activate';

export interface ZoneConfig {
  id: Zone;
  label: string;
  route: string;
  accentColor: string;
  cssVar: string;
  glowClass: string;
  description: string;
  icon: string;
}

export const zones: Record<Zone, ZoneConfig> = {
  home: {
    id: 'home',
    label: 'Home',
    route: '/',
    accentColor: '#08F7FE',
    cssVar: 'var(--zone-home)',
    glowClass: 'glow-cyan',
    description: 'AI Agent Skill Ecosystem',
    icon: 'Sparkles',
  },
  build: {
    id: 'build',
    label: 'Build',
    route: '/prompt-engineering',
    accentColor: '#BFFF00',
    cssVar: 'var(--zone-build)',
    glowClass: 'glow-lime',
    description: 'Technical Skills & MCP Stacks',
    icon: 'Wrench',
  },
  discover: {
    id: 'discover',
    label: 'Discover',
    route: '/skill-ecosystem',
    accentColor: '#FF2E63',
    cssVar: 'var(--zone-discover)',
    glowClass: 'glow-magenta',
    description: 'All 48 Skills',
    icon: 'Compass',
  },
  playbook: {
    id: 'playbook',
    label: 'Playbook',
    route: '/accomplishments',
    accentColor: '#C77DFF',
    cssVar: 'var(--zone-playbook)',
    glowClass: 'glow-violet',
    description: 'Dev Journey Timeline',
    icon: 'BookOpen',
  },
  activate: {
    id: 'activate',
    label: 'Activate',
    route: '/agent-modes',
    accentColor: '#FF6B35',
    cssVar: 'var(--zone-activate)',
    glowClass: 'glow-orange',
    description: '7 Agent Modes',
    icon: 'Zap',
  },
};

// ─── Layer Configuration ───────────────────────────────────────────

export interface LayerConfig {
  id: number;
  name: string;
  zIndex: number;
  parallaxSpeed: number; // multiplier relative to scroll speed (0 = none)
  blurLevel: 'none' | 'sm' | 'md' | 'lg';
  description: string;
  mobileCollapse: boolean; // whether to reduce on mobile
}

export const layers: LayerConfig[] = [
  {
    id: 1,
    name: 'Atmosphere',
    zIndex: 0,
    parallaxSpeed: 0.15,
    blurLevel: 'none',
    description: 'Background ambient particles, subtle gradients, decorative elements',
    mobileCollapse: true,
  },
  {
    id: 2,
    name: 'Foundation',
    zIndex: 10,
    parallaxSpeed: 0.3,
    blurLevel: 'sm',
    description: 'Main content: glass panels, navigation, zone cards, skill grid',
    mobileCollapse: false,
  },
  {
    id: 3,
    name: 'Interactive',
    zIndex: 20,
    parallaxSpeed: 0.5,
    blurLevel: 'none',
    description: 'Interactive elements: buttons, inputs, hover states, clickable cards',
    mobileCollapse: false,
  },
  {
    id: 4,
    name: 'Overlay',
    zIndex: 30,
    parallaxSpeed: 0,
    blurLevel: 'lg',
    description: 'Floating UI: command palette, modals, tooltips, dropdowns, toasts',
    mobileCollapse: false,
  },
];

// ─── CSS Class Generators ──────────────────────────────────────────

export function getLayerClasses(layerId: number, isMobile: boolean): string {
  const layer = layers.find((l) => l.id === layerId);
  if (!layer) return '';

  const base = `z-[${layer.zIndex}]`;
  const parallax = layer.parallaxSpeed > 0 ? 'will-change-transform' : '';
  const mobileReduce = isMobile && layer.mobileCollapse ? 'hidden md:block' : '';

  return [base, parallax, mobileReduce].filter(Boolean).join(' ');
}

export function getGlassClasses(level: 'light' | 'medium' | 'heavy' = 'medium'): string {
  switch (level) {
    case 'light':
      return 'glass';
    case 'medium':
      return 'glass-strong';
    case 'heavy':
      return 'glass-heavy';
  }
}

// ─── Zone Route Helpers ────────────────────────────────────────────

export function getZoneByRoute(pathname: string): Zone {
  const routeMap: Record<string, Zone> = {
    '/': 'home',
    '/prompt-engineering': 'build',
    '/skill-ecosystem': 'discover',
    '/accomplishments': 'playbook',
    '/agent-modes': 'activate',
  };
  return routeMap[pathname] || 'home';
}

export function getZoneAccentStyle(zone: Zone): React.CSSProperties {
  return {
    '--zone-accent': zones[zone].accentColor,
    '--zone-accent-rgb': hexToRgb(zones[zone].accentColor),
  } as React.CSSProperties;
}

// ─── Utility ───────────────────────────────────────────────────────

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '8, 139, 160';
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}
