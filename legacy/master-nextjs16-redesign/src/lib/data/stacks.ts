export interface MCPStack {
  id: string;
  name: string;
  description: string;
  servers: string[];
  bestFor: string;
  synergy: string[];
  conflicts: string[];
  stackingTips: string[];
  useCases: { title: string; description: string }[];
  relatedSkills: string[];
}

export const mcpStacks: MCPStack[] = [
  {
    id: "creative-studio",
    name: "Creative Studio",
    description: "Design agencies, content creators",
    servers: ["PictoFlux AI", "Figma", "Filesystem", "Memory"],
    bestFor: "Design agencies, content creators",
    synergy: ["PictoFlux AI + Filesystem: Generate images, save to project assets"],
    conflicts: [],
    stackingTips: [
      "Pair with Content Machine stack for end-to-end content production pipeline",
      "Add Brave Search for visual research and inspiration gathering",
    ],
    useCases: [
      { title: "Visual Content Pipeline", description: "Generate images, save to local assets, iterate designs with AI feedback. End-to-end visual production." },
      { title: "Brand Asset Creation", description: "Create consistent brand visuals with Memory storing style preferences across sessions." }
    ],
    relatedSkills: ["photography-ai", "pictoflux-ai", "ui-ux-pro-max-v7"]
  },
  {
    id: "research-engine",
    name: "Research Engine",
    description: "Researchers, analysts",
    servers: ["Brave Search", "Fetch", "Arxiv", "Memory"],
    bestFor: "Researchers, analysts",
    synergy: ["Brave Search + Fetch: Search finds sources, Fetch extracts full content"],
    conflicts: [],
    stackingTips: [
      "Combine with Fullstack Dev to implement research-backed features",
      "Add Sequential Thinking for structured analysis of research findings",
    ],
    useCases: [
      { title: "Academic Research", description: "Search papers via Arxiv, fetch full text, synthesize findings with Memory tracking research threads." },
      { title: "Competitive Analysis", description: "Research competitors via Brave Search, extract key data from multiple sources, compile reports." }
    ],
    relatedSkills: ["feature-research", "code-research", "chain-of-thought"]
  },
  {
    id: "fullstack-dev",
    name: "Full-Stack Dev",
    description: "Developers, startups",
    servers: ["GitHub", "Postgres", "Filesystem", "Sequential Thinking"],
    bestFor: "Developers, startups",
    synergy: ["GitHub + Filesystem: Code changes tracked in git, files managed locally"],
    conflicts: [],
    stackingTips: [
      "Layers well with Data Pipeline stack for database-driven applications",
      "Add Agent OS stack when building AI-powered features on top",
    ],
    useCases: [
      { title: "Web App Development", description: "Clone repos, write code, manage database schema, deploy. Full lifecycle from idea to production." },
      { title: "API Development", description: "Design APIs with Sequential Thinking, implement with GitHub tracking, test with Postgres." }
    ],
    relatedSkills: ["superpowers", "mcp-builder", "vercel-react-best-practices"]
  },
  {
    id: "content-machine",
    name: "Content Machine",
    description: "Content marketers, bloggers",
    servers: ["Brave Search", "PictoFlux AI", "Filesystem", "Memory"],
    bestFor: "Content marketers, bloggers",
    synergy: ["Memory + any: Stores preferences, context, and learned patterns"],
    conflicts: [],
    stackingTips: [
      "Combine with Creative Studio for visual-rich content with custom graphics",
      "Add Data Pipeline for content analytics and performance tracking",
    ],
    useCases: [
      { title: "Blog Publishing Pipeline", description: "Research topics, generate images, write drafts, store in Filesystem. Memory maintains brand voice across posts." },
      { title: "Newsletter Production", description: "Weekly newsletter from research to graphics to final copy, all in one workflow." }
    ],
    relatedSkills: ["seo-content-writer", "social-media-manager", "social-content-pillars"]
  },
  {
    id: "data-pipeline",
    name: "Data Pipeline",
    description: "Data engineers, analysts",
    servers: ["Postgres", "Fetch", "Filesystem", "SQLite"],
    bestFor: "Data engineers, analysts",
    synergy: ["Postgres + Filesystem: Database exports to local files for backup"],
    conflicts: [],
    stackingTips: [
      "Combine with Fullstack Dev for data-driven web applications",
      "Layer with Research Engine to feed external data into analysis pipelines",
    ],
    useCases: [
      { title: "ETL Pipeline", description: "Fetch external data, transform with SQL, store in Postgres or export to Filesystem as CSV/JSON." },
      { title: "Data Analysis", description: "Query multiple databases, join datasets, export analyzed results to local files." }
    ],
    relatedSkills: ["mcp-builder", "audit-analyzer", "explore"]
  },
  {
    id: "security-audit",
    name: "Security Audit",
    description: "Security engineers, DevOps",
    servers: ["GitHub", "Filesystem", "Sequential Thinking", "Brave Search"],
    bestFor: "Security engineers, DevOps",
    synergy: ["Sequential Thinking + any complex task: Structured reasoning reduces errors 40%"],
    conflicts: [],
    stackingTips: [
      "Combine with Research Engine for threat intelligence gathering",
      "Pair with Fullstack Dev to implement security fixes after audit findings",
    ],
    useCases: [
      { title: "Code Security Audit", description: "Scan GitHub repos, analyze code for vulnerabilities, document findings with Sequential Thinking." },
      { title: "Threat Modeling", description: "Research attack vectors via Brave Search, model threats, produce mitigation recommendations." }
    ],
    relatedSkills: ["mcp-security-scanner", "audit-analyzer", "devils-advocate"]
  },
  {
    id: "agent-os",
    name: "Agent OS",
    description: "AI researchers, agent builders",
    servers: ["Memory", "Sequential Thinking", "Filesystem", "Brave Search"],
    bestFor: "AI researchers, agent builders",
    synergy: ["Memory + any: Universal enhancer \u2014 stores preferences and learned patterns"],
    conflicts: [],
    stackingTips: [
      "Foundation stack that layers with everything. Start here, then add specialized stacks.",
      "Combine with Fullstack Dev for production agent deployment with database and git support",
    ],
    useCases: [
      { title: "Agent Development", description: "Build and test AI agents with Memory for context persistence and Sequential Thinking for reasoning." },
      { title: "Research Experiments", description: "Run experiments, track results in Memory, document findings via Filesystem." }
    ],
    relatedSkills: ["agent-roles", "persistent-memory", "context-compressor"]
  },
  {
    id: "product-launch",
    name: "Product Launch",
    description: "Indie hackers, founders",
    servers: ["Brave Search", "PictoFlux AI", "GitHub", "Memory"],
    bestFor: "Indie hackers, founders",
    synergy: ["Brave Search + Sequential Thinking: Research findings structured into logical arguments"],
    conflicts: [],
    stackingTips: [
      "Layer with Content Machine stack for coordinated launch content across all channels",
      "Pair with Fullstack Dev if the launch includes a product build component",
    ],
    useCases: [
      { title: "Product Launch Campaign", description: "Research market, create launch assets, build landing page, track with Memory." },
      { title: "Indie Hackers MVP Launch", description: "From idea validation to MVP build to launch marketing, all in coordinated workflow." }
    ],
    relatedSkills: ["gumroad-pipeline", "jtbd-research", "social-media-manager"]
  },
  {
    id: "agent-led-design",
    name: "Agent-Led Design Pipeline",
    description: "Autonomous UI generation + team component sharing. Stitch Loop generates pages, 21st.dev Registry publishes them for the team.",
    servers: ["Stitch MCP", "21st.dev CLI", "Filesystem"],
    bestFor: "Teams automating design-to-library workflows",
    synergy: [
      "Stitch Loop + 21st.dev Registry: Agent builds UI components, publishes to team registry, teammates install with one command",
      "Stitch + Filesystem: Generated designs saved locally before publishing",
    ],
    conflicts: [],
    stackingTips: [
      "Start with Stitch Loop to auto-generate a page, then publish key components to 21st.dev for reuse",
      "Combine with Creative Studio stack for visual quality control before publishing",
    ],
    useCases: [
      { title: "Auto-Build + Publish", description: "Agent generates a landing page via Stitch, extracts components, publishes to team registry. Teammates install instantly." },
      { title: "Design System Farming", description: "Run Stitch Loop to build multiple pages, promote reusable components to 21st.dev, build a shared design system iteratively." }
    ],
    relatedSkills: ["stitch-loop", "21st-registry", "ui-ux-pro-max-v7"]
  },
  {
    id: "motion-first-ux",
    name: "Motion-First Experience",
    description: "Kinetic, animated interfaces built with design intelligence. UI/UX Pro Max designs, Framer Motion brings them to life.",
    servers: ["Framer Motion", "UI/UX Pro Max CLI", "Tailwind CSS"],
    bestFor: "Designers and devs building animation-rich, premium UIs",
    synergy: [
      "UI/UX Pro Max + Framer Motion: AI generates layout with motion specs pre-baked, no manual animation wiring",
      "Framer Motion + Tailwind: Layout animations with spring physics for natural-feeling transitions",
    ],
    conflicts: [],
    stackingTips: [
      "Design hero sections in UI/UX Pro Max first, then overlay Framer Motion scroll-triggered animations",
      "Use layout animations (AnimatePresence) for page transitions - keeps the UX feeling fluid",
    ],
    useCases: [
      { title: "Premium Landing Page", description: "AI generates a bold layout with UI/UX Pro Max, Framer Motion adds scroll reveals, parallax, and micro-interactions." },
      { title: "Interactive Dashboard", description: "Motion-first data viz: enter/exit animations for filtering, layout animations for resizing, gesture handlers for drag-and-drop." }
    ],
    relatedSkills: ["ui-ux-pro-max-v7", "framer-motion", "gsap-animations"]
  },
  {
    id: "full-creative-studio",
    name: "Full Creative Studio",
    description: "End-to-end design-to-deployment pipeline. Design with UI/UX Pro Max, animate with Framer Motion, build with Stitch Loop, share with 21st.dev Registry.",
    servers: ["UI/UX Pro Max", "Framer Motion", "Stitch MCP", "21st.dev CLI"],
    bestFor: "Teams wanting a complete design-to-library pipeline",
    synergy: [
      "UI/UX Pro Max to Stitch Loop: AI generates design specs, Stitch builds the actual pages autonomously",
      "Framer Motion to 21st.dev: Animated components published to registry, consumed by any project",
      "All four + Filesystem: Full pipeline from design through animation through publishing",
    ],
    conflicts: [],
    stackingTips: [
      "Start with UI/UX Pro Max for the overall design language, then run Stitch Loop to generate pages. Add Framer Motion for polish, publish reusable components to 21st.dev.",
      "This is the ultimate creative stack - use it for flagship projects where every detail matters.",
    ],
    useCases: [
      { title: "Marketing Site Launch", description: "Design with Pro Max, auto-build with Stitch, add motion with Framer, publish hero components to 21st.dev for the team." },
      { title: "Component Library IPO", description: "Build an entire design system: Pro Max for tokens, Stitch for page variants, Framer for interaction specs, 21st.dev for distribution." }
    ],
    relatedSkills: ["ui-ux-pro-max-v7", "framer-motion", "stitch-loop", "21st-registry"]
  }
]
