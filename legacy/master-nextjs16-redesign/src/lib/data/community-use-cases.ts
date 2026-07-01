export interface CommunityUseCase {
  id: string;
  title: string;
  description: string;
  stacks: string[];
  skills: string[];
  source: string;
  sourceUrl: string;
  industry: string;
}

export const communityUseCases: CommunityUseCase[] = [
  {
    id: "ticket-to-pr",
    title: "Bug Report → Auto-Fix PR",
    description:
      "A startup automated their entire bug-fix pipeline. When a GitHub issue is created, the agent reads the bug report, searches the codebase via Filesystem, generates a fix, runs tests, and opens a PR — all without human touch. Reduced median fix time from 4 hours to 11 minutes.",
    stacks: ["fullstack-dev", "agent-os"],
    skills: ["superpowers", "mcp-builder"],
    source: "Pragmatic Engineer",
    sourceUrl: "https://blog.pragmaticengineer.com/mcp-production-use-cases/",
    industry: "SaaS / DevOps",
  },
  {
    id: "support-copilot",
    title: "Customer Support Copilot",
    description:
      "A B2B company connected Zendesk, their data warehouse (Postgres), and product documentation via MCP servers. The agent reads a ticket context, queries past resolutions from the warehouse, searches docs for relevant articles, and drafts a reply. Support team handles 2.7x more tickets per shift.",
    stacks: ["research-engine", "data-pipeline"],
    skills: ["chain-of-thought", "explore", "feature-research"],
    source: "Blaxel Blog",
    sourceUrl: "https://blaxel.ai/blog/mcp-production-use-cases",
    industry: "Customer Support",
  },
  {
    id: "design-to-code",
    title: "Figma Design → Production Code",
    description:
      "A design agency built a pipeline: Figma MCP reads design specs and component tokens, the agent generates matching React components with exact dimensions, colors, and typography, then saves them directly into the project via Filesystem. Design handoff went from 3 days to 45 minutes.",
    stacks: ["creative-studio", "fullstack-dev"],
    skills: ["photography-ai", "vercel-react-best-practices", "ui-ux-pro-max-v7"],
    source: "Microsoft Research",
    sourceUrl: "https://techcommunity.microsoft.com/blog/mcp-design-to-code-pipeline/",
    industry: "Design / Frontend",
  },
  {
    id: "kubernetes-ops",
    title: "Kubernetes Cluster Agent",
    description:
      "A platform team deployed a Kubernetes MCP server that gives the agent full cluster visibility — pod status, logs, resource usage, events. The agent diagnoses issues, suggests fixes, and can execute kubectl commands through the MCP to resolve problems. Cut MTTR from 25 minutes to 3 minutes.",
    stacks: ["agent-os", "security-audit"],
    skills: ["systematic-debugging", "audit-analyzer"],
    source: "GitHub Community",
    sourceUrl: "https://github.com/anthropics/mcp-servers/discussions",
    industry: "DevOps / Infrastructure",
  },
  {
    id: "data-analyst",
    title: "Self-Service Data Analyst",
    description:
      "A fintech company exposed their data warehouse through a read-only Postgres MCP. Non-technical team members ask questions in plain English ('What was our MRR growth by region last quarter?'), and the agent generates SQL, queries the warehouse, and returns formatted results. 80+ monthly active internal users.",
    stacks: ["data-pipeline"],
    skills: ["explore", "code-research", "chain-of-thought"],
    source: "Production MCP Guides",
    sourceUrl: "https://modelcontextprotocol.io/use-cases/data-analytics",
    industry: "Fintech / Analytics",
  },
  {
    id: "multi-agent-shared",
    title: "Multi-Agent Shared MCP Architecture",
    description:
      "An AI startup runs 4 different AI agents (code, content, support, analytics) all sharing 6 MCP servers as a common backend. Each agent has its own system prompt and tool subset. This shared architecture eliminated per-agent integrations and reduced infrastructure complexity by 70%.",
    stacks: ["agent-os"],
    skills: ["agent-roles", "orchestration", "context-compressor"],
    source: "Multi-Agent Systems Report",
    sourceUrl: "https://github.com/microsoft/genai-mcp-patterns",
    industry: "AI Infrastructure",
  },
  {
    id: "enterprise-crm",
    title: "Enterprise CRM Workflows",
    description:
      "A sales team connected Salesforce MCP to their agent. Reps can now ask: 'Show me all opportunities closing this quarter with deal size over $50K that have no recent activity.' The agent reads Salesforce via MCP, filters the data, and returns a ranked list — then can draft personalized follow-up emails.",
    stacks: ["agent-os", "content-machine"],
    skills: ["output-formatter", "social-media-manager"],
    source: "Salesforce MCP Blog",
    sourceUrl: "https://developer.salesforce.com/blogs/2025/mcp-integration",
    industry: "Sales / CRM",
  },
  {
    id: "supply-chain",
    title: "Inventory & Supply Chain Agent",
    description:
      "An e-commerce company combined Inventory MCP, Shopify MCP, and a 3PL tracking API (wrapped as MCP). The agent monitors stock levels, predicts reorder needs based on sales velocity, creates purchase orders, and tracks shipments — replacing a manual process that required 3 full-time staff.",
    stacks: ["data-pipeline", "product-launch"],
    skills: ["feature-research", "code-research"],
    source: "Shopify Engineering",
    sourceUrl: "https://shopify.engineering/mcp-supply-chain-automation",
    industry: "E-Commerce / Logistics",
  },
  {
    id: "legacy-bridge",
    title: "Legacy System AI Bridge",
    description:
      "A bank wrapped their 30-year-old COBOL mainframe with an MCP server. Now their AI agents can query account data, transaction histories, and compliance records from the legacy system through a modern MCP interface without modifying the mainframe. Zero downtime during the integration.",
    stacks: ["agent-os", "security-audit"],
    skills: ["chain-of-thought", "explore"],
    source: "Enterprise Architecture Digest",
    sourceUrl: "https://martinfowler.com/articles/mcp-legacy-integration.html",
    industry: "Banking / Enterprise",
  },
  {
    id: "devops-ci-cd",
    title: "CI/CD Pipeline Manager",
    description:
      "A DevOps team wired their CI/CD system (GitHub Actions + PagerDuty + Slack) through MCP. When a deployment fails, the agent reads the logs, checks recent commits, identifies the likely breaking change via GitHub, posts the diagnosis to Slack, and if confident, creates a rollback PR.",
    stacks: ["fullstack-dev", "agent-os"],
    skills: ["systematic-debugging", "audit-analyzer", "superpowers"],
    source: "Pragmatic Engineer",
    sourceUrl: "https://blog.pragmaticengineer.com/mcp-production-use-cases/",
    industry: "DevOps / CI-CD",
  },
  {
    id: "m365-automation",
    title: "Microsoft 365 + Playwright Automation",
    description:
      "An enterprise admin used Microsoft 365 MCP server combined with Playwright to automate user provisioning, license management, and compliance reporting across 5,000+ users. The agent navigates admin portals, reads/writes via MCP, and generates monthly compliance PDFs automatically.",
    stacks: ["agent-os", "security-audit"],
    skills: ["orchestration", "code-research"],
    source: "Microsoft 365 Dev Blog",
    sourceUrl: "https://devblogs.microsoft.com/microsoft365/mcp-automation/",
    industry: "Enterprise IT",
  },
  {
    id: "research-synthesis",
    title: "Automated Research Synthesis",
    description:
      "A strategy consulting firm uses a Research Engine stack agent to: search Brave for recent market reports, use Fetch to extract full articles, index findings in Memory, and then generate a structured executive summary. Each weekly competitive brief went from 8 hours of manual work to 25 minutes of agent time.",
    stacks: ["research-engine", "content-machine"],
    skills: ["feature-research", "code-research", "chain-of-thought"],
    source: "MCP Community Showcase",
    sourceUrl: "https://github.com/modelcontextprotocol/servers/discussions/categories/show-and-tell",
    industry: "Consulting / Research",
  },
];
