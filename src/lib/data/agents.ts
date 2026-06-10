export interface AgentMode {
  id: string;
  name: string;
  emoji: string;
  animal: string;
  thinkingStyle: string;
  bestFor: string;
  description: string;
  color: string;
  invokeCommand: string;
  useCases: { title: string; description: string }[];
  relatedSkills: string[];
  synergyModes: string[];
}

export const agentModes: AgentMode[] = [
  {
    id: "rabbit-multiply-ideas",
    name: "Rabbit",
    emoji: "\ud83d\udc07",
    animal: "Rabbit",
    thinkingStyle: "Multiply Ideas",
    bestFor: "Brainstorming variations, generating 10 different angles/audiences/formats from one idea",
    description: "Take an idea and multiply it into 10 different variations \u2014 change the angle, audience, and format for each.",
    color: "#08F7FE",
    invokeCommand: "/rabbit-multiply-ideas",
    useCases: [
      { title: "Content Ideation", description: "Turn one blog topic into 10 different content angles across formats and audiences." },
      { title: "Product Positioning", description: "Generate 10 unique positioning angles for a product, each targeting a different market segment." }
    ],
    relatedSkills: ["social-content-pillars", "seo-content-writer", "social-media-manager"],
    synergyModes: ["owl-deep-analysis", "elephant-cross-field"]
  },
  {
    id: "owl-deep-analysis",
    name: "Owl",
    emoji: "\ud83e\udd89",
    animal: "Owl",
    thinkingStyle: "Deep Analysis",
    bestFor: "Slow, observant, multi-perspective analysis to uncover hidden factors others miss",
    description: "Think slowly and analytically \u2014 examine problems from multiple perspectives and identify hidden factors most people overlook.",
    color: "#C77DFF",
    invokeCommand: "/owl-deep-analysis",
    useCases: [
      { title: "Market Analysis", description: "Deep competitive analysis examining market forces, customer psychology, and hidden dynamics." },
      { title: "Problem Decomposition", description: "Break down complex problems into root causes, identifying interconnected factors." }
    ],
    relatedSkills: ["chain-of-thought", "socratic-method", "devils-advocate"],
    synergyModes: ["elephant-cross-field", "eagle-big-picture"]
  },
  {
    id: "ant-break-into-steps",
    name: "Ant",
    emoji: "\ud83d\udc1c",
    animal: "Ant",
    thinkingStyle: "Break Into Steps",
    bestFor: "Decomposing complex goals into the smallest realistically completable actions",
    description: "Break goals into the smallest possible steps someone could realistically complete.",
    color: "#BFFF00",
    invokeCommand: "/ant-break-into-steps",
    useCases: [
      { title: "Project Planning", description: "Decompose a large project into granular, actionable tasks with clear completion criteria." },
      { title: "System Design", description: "Break down system architecture into implementable modules and components." }
    ],
    relatedSkills: ["beaver-build-systems", "superpowers", "chain-of-thought"],
    synergyModes: ["beaver-build-systems", "dolphin-creative-solutions"]
  },
  {
    id: "eagle-big-picture",
    name: "Eagle",
    emoji: "\ud83e\udd85",
    animal: "Eagle",
    thinkingStyle: "Big Picture Strategy",
    bestFor: "Long-term strategic thinking, seeing how all the pieces connect from above",
    description: "See the long-term strategy \u2014 explain how all the pieces connect from a bird's-eye view.",
    color: "#FF6B35",
    invokeCommand: "/eagle-big-picture",
    useCases: [
      { title: "Strategic Roadmapping", description: "Map out 6-12 month product strategy with clear milestones and risk assessment." },
      { title: "System Architecture Overview", description: "See how all components of a complex system interconnect and depend on each other." }
    ],
    relatedSkills: ["jtbd-research", "feature-research", "agent-roles"],
    synergyModes: ["owl-deep-analysis", "elephant-cross-field"]
  },
  {
    id: "dolphin-creative-solutions",
    name: "Dolphin",
    emoji: "\ud83d\udc2c",
    animal: "Dolphin",
    thinkingStyle: "Creative Solutions",
    bestFor: "Playful, inventive approaches that break conventional thinking patterns",
    description: "Generate curious, playful, and inventive solutions that most people wouldn't normally consider.",
    color: "#FF2E63",
    invokeCommand: "/dolphin-creative-solutions",
    useCases: [
      { title: "Creative Problem Solving", description: "Find unconventional solutions to stubborn problems by breaking thinking patterns." },
      { title: "Innovation Workshops", description: "Generate breakthrough ideas using lateral thinking techniques and playful exploration." }
    ],
    relatedSkills: ["rabbit-multiply-ideas", "photography-ai", "simulation-sandbox"],
    synergyModes: ["rabbit-multiply-ideas", "elephant-cross-field"]
  },
  {
    id: "beaver-build-systems",
    name: "Beaver",
    emoji: "\ud83e\uddab",
    animal: "Beaver",
    thinkingStyle: "Build Systems",
    bestFor: "Designing practical, step-by-step systems and processes that solve problems",
    description: "Design practical systems that solve problems step by step, like a beaver building a dam.",
    color: "#00FF9D",
    invokeCommand: "/beaver-build-systems",
    useCases: [
      { title: "Workflow Design", description: "Build repeatable systems and processes for recurring tasks and operations." },
      { title: "Process Optimization", description: "Analyze existing workflows and redesign them for efficiency and reliability." }
    ],
    relatedSkills: ["superpowers", "feedback-loop", "mcp-builder"],
    synergyModes: ["ant-break-into-steps", "eagle-big-picture"]
  },
  {
    id: "elephant-cross-field",
    name: "Elephant",
    emoji: "\ud83d\udc18",
    animal: "Elephant",
    thinkingStyle: "Cross-Field Connections",
    bestFor: "Applying insights from psychology, economics, science, and history to current challenges",
    description: "Connect ideas to insights from other fields such as psychology, economics, science, or history.",
    color: "#FFE600",
    invokeCommand: "/elephant-cross-field",
    useCases: [
      { title: "Cross-Disciplinary Innovation", description: "Apply principles from biology, economics, or psychology to solve business problems." },
      { title: "Strategic Analogy", description: "Use historical and scientific analogies to illuminate current challenges." }
    ],
    relatedSkills: ["socratic-method", "devils-advocate", "eagle-big-picture"],
    synergyModes: ["owl-deep-analysis", "eagle-big-picture"]
  }
];
