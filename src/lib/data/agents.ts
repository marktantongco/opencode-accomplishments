export interface AgentMode {
  id: string;
  name: string;
  emoji: string;
  animal: string;
  thinkingStyle: string;
  bestFor: string;
  description: string;
  color: string;
}

export const agentModes: AgentMode[] = [
  {
    id: "rabbit-multiply-ideas",
    name: "Rabbit",
    emoji: "🐇",
    animal: "Rabbit",
    thinkingStyle: "Multiply Ideas",
    bestFor: "Brainstorming variations, generating 10 different angles/audiences/formats from one idea",
    description: "Take an idea and multiply it into 10 different variations — change the angle, audience, and format for each.",
    color: "#08F7FE"
  },
  {
    id: "owl-deep-analysis",
    name: "Owl",
    emoji: "🦉",
    animal: "Owl",
    thinkingStyle: "Deep Analysis",
    bestFor: "Slow, observant, multi-perspective analysis to uncover hidden factors others miss",
    description: "Think slowly and analytically — examine problems from multiple perspectives and identify hidden factors most people overlook.",
    color: "#C77DFF"
  },
  {
    id: "ant-break-into-steps",
    name: "Ant",
    emoji: "🐜",
    animal: "Ant",
    thinkingStyle: "Break Into Steps",
    bestFor: "Decomposing complex goals into the smallest realistically completable actions",
    description: "Break goals into the smallest possible steps someone could realistically complete.",
    color: "#BFFF00"
  },
  {
    id: "eagle-big-picture",
    name: "Eagle",
    emoji: "🦅",
    animal: "Eagle",
    thinkingStyle: "Big Picture Strategy",
    bestFor: "Long-term strategic thinking, seeing how all the pieces connect from above",
    description: "See the long-term strategy — explain how all the pieces connect from a bird's-eye view.",
    color: "#FF6B35"
  },
  {
    id: "dolphin-creative-solutions",
    name: "Dolphin",
    emoji: "🐬",
    animal: "Dolphin",
    thinkingStyle: "Creative Solutions",
    bestFor: "Playful, inventive approaches that break conventional thinking patterns",
    description: "Generate curious, playful, and inventive solutions that most people wouldn't normally consider.",
    color: "#FF2E63"
  },
  {
    id: "beaver-build-systems",
    name: "Beaver",
    emoji: "🦫",
    animal: "Beaver",
    thinkingStyle: "Build Systems",
    bestFor: "Designing practical, step-by-step systems and processes that solve problems",
    description: "Design practical systems that solve problems step by step, like a beaver building a dam.",
    color: "#00FF9D"
  },
  {
    id: "elephant-cross-field",
    name: "Elephant",
    emoji: "🐘",
    animal: "Elephant",
    thinkingStyle: "Cross-Field Connections",
    bestFor: "Applying insights from psychology, economics, science, and history to current challenges",
    description: "Connect ideas to insights from other fields such as psychology, economics, science, or history.",
    color: "#FFE600"
  }
];
