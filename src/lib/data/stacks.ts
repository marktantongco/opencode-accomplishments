export interface MCPStack {
  id: string;
  name: string;
  description: string;
  servers: string[];
  bestFor: string;
  synergy: string[];
  conflicts: string[];
}

export const mcpStacks: MCPStack[] = [
  {
    id: "creative-studio",
    name: "Creative Studio",
    description: "Design agencies, content creators",
    servers: ["PictoFlux AI", "Figma", "Filesystem", "Memory"],
    bestFor: "Design agencies, content creators",
    synergy: ["PictoFlux AI + Filesystem: Generate images, save to project assets"],
    conflicts: []
  },
  {
    id: "research-engine",
    name: "Research Engine",
    description: "Researchers, analysts",
    servers: ["Brave Search", "Fetch", "Arxiv", "Memory"],
    bestFor: "Researchers, analysts",
    synergy: ["Brave Search + Fetch: Search finds sources, Fetch extracts full content"],
    conflicts: []
  },
  {
    id: "fullstack-dev",
    name: "Full-Stack Dev",
    description: "Developers, startups",
    servers: ["GitHub", "Postgres", "Filesystem", "Sequential Thinking"],
    bestFor: "Developers, startups",
    synergy: ["GitHub + Filesystem: Code changes tracked in git, files managed locally"],
    conflicts: []
  },
  {
    id: "content-machine",
    name: "Content Machine",
    description: "Content marketers, bloggers",
    servers: ["Brave Search", "PictoFlux AI", "Filesystem", "Memory"],
    bestFor: "Content marketers, bloggers",
    synergy: ["Memory + any: Stores preferences, context, and learned patterns"],
    conflicts: []
  },
  {
    id: "data-pipeline",
    name: "Data Pipeline",
    description: "Data engineers, analysts",
    servers: ["Postgres", "Fetch", "Filesystem", "SQLite"],
    bestFor: "Data engineers, analysts",
    synergy: ["Postgres + Filesystem: Database exports to local files for backup"],
    conflicts: []
  },
  {
    id: "security-audit",
    name: "Security Audit",
    description: "Security engineers, DevOps",
    servers: ["GitHub", "Filesystem", "Sequential Thinking", "Brave Search"],
    bestFor: "Security engineers, DevOps",
    synergy: ["Sequential Thinking + any complex task: Structured reasoning reduces errors 40%"],
    conflicts: []
  },
  {
    id: "agent-os",
    name: "Agent OS",
    description: "AI researchers, agent builders",
    servers: ["Memory", "Sequential Thinking", "Filesystem", "Brave Search"],
    bestFor: "AI researchers, agent builders",
    synergy: ["Memory + any: Universal enhancer — stores preferences and learned patterns"],
    conflicts: []
  },
  {
    id: "product-launch",
    name: "Product Launch",
    description: "Indie hackers, founders",
    servers: ["Brave Search", "PictoFlux AI", "GitHub", "Memory"],
    bestFor: "Indie hackers, founders",
    synergy: ["Brave Search + Sequential Thinking: Research findings structured into logical arguments"],
    conflicts: []
  }
];
