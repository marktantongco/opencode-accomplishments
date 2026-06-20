// /api/recommend.ts — Vercel AI Gateway edge function
// Powers the opencode OS chat widget's recommendation engine.
//
// Route: POST /api/recommend  { message: string }
// Returns: { reply: string, recommendations: [{ name, slug, score, reason }] }
//
// Strategy:
//   1. Try Vercel AI Gateway (https://ai-gateway.vercel.app/v1/chat/completions)
//      using AI_GATEWAY_API_KEY env var. Returns LLM-ranked skill recs.
//   2. If AI Gateway is unconfigured or fails, fall back to a deterministic
//      rule-based INTENT_MAP (same logic that runs client-side).
//   3. Always returns the same JSON shape so the client never breaks.
//
// Why edge runtime: cold-start ~50ms, runs close to user, no Node polyfills
// needed (we only use fetch + Web Crypto).

export const config = {
  runtime: 'edge',
};

// ─── Skill catalog (mirror of client SKILLS_DATA, top 30 most-installed) ───
// Kept short for bundle size; full catalog lives in client. If a recommendation
// comes back for a skill not in this list, client falls back to its own data.
const SKILLS = [
  { slug: 'gsap-animation-engineer', name: 'GSAP Animation Engineer', category: 'Animation', install: 'opencode skill add gsap-animation-engineer' },
  { slug: 'motion-animator', name: 'Motion Animator', category: 'Animation', install: 'opencode skill add motion-animator' },
  { slug: 'animation-orchestrator', name: 'Animation Orchestrator', category: 'Animation', install: 'opencode skill add animation-orchestrator' },
  { slug: 'animation-auditor', name: 'Animation Auditor', category: 'Audit', install: 'opencode skill add animation-auditor' },
  { slug: 'threejs-orchestrator', name: 'Three.js Orchestrator', category: '3D', install: 'opencode skill add threejs-orchestrator' },
  { slug: 'frontend-design', name: 'Frontend Design', category: 'Design', install: 'opencode skill add frontend-design' },
  { slug: 'composition-patterns', name: 'Composition Patterns', category: 'Design', install: 'opencode skill add composition-patterns' },
  { slug: 'shadcn', name: 'shadcn/ui', category: 'Design', install: 'opencode skill add shadcn' },
  { slug: 'next-best-practices', name: 'Next.js Best Practices', category: 'Code', install: 'opencode skill add next-best-practices' },
  { slug: 'react-best-practices', name: 'React Best Practices', category: 'Code', install: 'opencode skill add react-best-practices' },
  { slug: 'tdd-workflow', name: 'TDD Workflow', category: 'Testing', install: 'opencode skill add tdd-workflow' },
  { slug: 'audit-analyzer', name: 'Audit Analyzer', category: 'Audit', install: 'opencode skill add audit-analyzer' },
  { slug: 'mcp-security-scanner', name: 'MCP Security Scanner', category: 'Security', install: 'opencode skill add mcp-security-scanner' },
  { slug: 'deep-research', name: 'Deep Research', category: 'Research', install: 'opencode skill add deep-research' },
  { slug: 'feature-research', name: 'Feature Research', category: 'Research', install: 'opencode skill add feature-research' },
  { slug: 'to-prd', name: 'to-PRD', category: 'Planning', install: 'opencode skill add to-prd' },
  { slug: 'jobs-to-be-done', name: 'Jobs to be Done', category: 'Research', install: 'opencode skill add jobs-to-be-done' },
  { slug: 'seo-content-writer', name: 'SEO Content Writer', category: 'Content', install: 'opencode skill add seo-content-writer' },
  { slug: 'seo-geo', name: 'SEO/GEO', category: 'Content', install: 'opencode skill add seo-geo' },
  { slug: 'social-media-manager', name: 'Social Media Manager', category: 'Content', install: 'opencode skill add social-media-manager' },
  { slug: 'social-content-pillars', name: 'Social Content Pillars', category: 'Content', install: 'opencode skill add social-content-pillars' },
  { slug: 'deployment-manager', name: 'Deployment Manager', category: 'Infra', install: 'opencode skill add deployment-manager' },
  { slug: 'skill-router', name: 'Skill Router', category: 'System', install: 'opencode skill add skill-router' },
  { slug: 'skill-finder', name: 'Skill Finder', category: 'System', install: 'opencode skill add skill-finder' },
  { slug: 'mcp-stack-curator', name: 'MCP Stack Curator', category: 'MCP', install: 'opencode skill add mcp-stack-curator' },
  { slug: 'mcp-builder', name: 'MCP Builder', category: 'MCP', install: 'opencode skill add mcp-builder' },
  { slug: 'agent-master', name: 'Agent Master', category: 'Agent', install: 'opencode skill add agent-master' },
  { slug: 'agent-decision', name: 'Agent Decision', category: 'Agent', install: 'opencode skill add agent-decision' },
  { slug: 'skill-architect', name: 'Skill Architect', category: 'Meta', install: 'opencode skill add skill-architect' },
  { slug: 'gumroad-pipeline', name: 'Gumroad Pipeline', category: 'Monetize', install: 'opencode skill add gumroad-pipeline' },
];

// ─── Rule-based fallback (same as client INTENT_MAP) ───────────────────────
const INTENT_MAP = [
  { patterns: ['website','landing page','web page','webapp','web app','site'], skills: ['frontend-design','shadcn','next-best-practices','composition-patterns'], message: '🚀 Your website-building stack:' },
  { patterns: ['animation','animate','motion','scroll effect','gsap','framer','transition'], skills: ['animation-orchestrator','motion-animator','gsap-animation-engineer','animation-auditor'], message: '🎬 Your animation toolkit:' },
  { patterns: ['design','ui','ux','component','palette','font','style','aesthetic'], skills: ['shadcn','frontend-design','composition-patterns'], message: '🎨 Your design intelligence stack:' },
  { patterns: ['deploy','ship','publish','host','vercel','netlify','production'], skills: ['deployment-manager','mcp-builder'], message: '🚀 Your deployment stack:' },
  { patterns: ['money','monetiz','saas','product','sell','revenue','pricing','funnel'], skills: ['gumroad-pipeline','seo-content-writer','social-media-manager','to-prd'], message: '💰 Your monetization toolkit:' },
  { patterns: ['research','investigat','analyz','study','understand','explore'], skills: ['deep-research','feature-research','skill-finder','jobs-to-be-done'], message: '🔍 Your research pipeline:' },
  { patterns: ['test','tdd','quality','audit','lint','validate','check'], skills: ['tdd-workflow','audit-analyzer','animation-auditor','mcp-security-scanner'], message: '✅ Your quality assurance stack:' },
  { patterns: ['mcp','server','tool','integration','plugin'], skills: ['mcp-builder','mcp-stack-curator','mcp-security-scanner'], message: '🔧 Your MCP development stack:' },
  { patterns: ['agent','pipeline','automat','orchestrat','coordinate','multi-agent'], skills: ['agent-master','agent-decision','skill-router'], message: '🤖 Your agent orchestration stack:' },
  { patterns: ['3d','three','webgl','canvas','3-d','babylon'], skills: ['threejs-orchestrator'], message: '🌍 Your 3D development stack:' },
  { patterns: ['content','writing','blog','copy','seo','social media'], skills: ['seo-content-writer','seo-geo','social-media-manager','social-content-pillars'], message: '✍️ Your content creation stack:' },
  { patterns: ['proxy','routing','gateway','api key','credential','security'], skills: ['mcp-security-scanner','skill-router'], message: '🛡️ Your infrastructure security stack:' },
];

function ruleBasedRecommend(message) {
  const q = message.toLowerCase();
  for (const intent of INTENT_MAP) {
    if (intent.patterns.some((p) => q.includes(p))) {
      const recs = intent.skills
        .map((slug, i) => {
          const skill = SKILLS.find((s) => s.slug === slug);
          if (!skill) return null;
          return { name: skill.name, slug: skill.slug, score: 95 - i * 5, reason: 'Keyword match on ' + intent.patterns[0] };
        })
        .filter(Boolean);
      return { reply: intent.message, recommendations: recs };
    }
  }
  // Default: top skill per category
  const seen = new Set();
  const recs = [];
  for (const s of SKILLS) {
    if (seen.has(s.category)) continue;
    seen.add(s.category);
    recs.push({ name: s.name, slug: s.slug, score: 70, reason: 'Top pick in ' + s.category });
    if (recs.length >= 5) break;
  }
  return { reply: 'Here are top picks from each category:', recommendations: recs };
}

// ─── AI Gateway call (only if AI_GATEWAY_API_KEY is set) ───────────────────
async function aiGatewayRecommend(message) {
  const apiKey = process.env.AI_GATEWAY_API_KEY;
  if (!apiKey) return null; // not configured → use rule-based

  const systemPrompt = `You are the opencode OS skill recommender.
Given a user's natural-language request, return the 3-5 most relevant skills from this catalog.
Respond as STRICT JSON, no markdown:
{"reply":"<short emoji-prefixed headline>","recommendations":[{"name":"<exact skill name>","slug":"<exact slug>","score":<0-100>,"reason":"<one sentence>"}]}

Available skills (use exact name + slug):
${JSON.stringify(SKILLS.map((s) => ({ name: s.name, slug: s.slug, category: s.category })))}

Rules:
- Only recommend skills from the catalog above. Do not invent skills.
- Score by relevance: 95+ for direct match, 80-94 for strong adjacent, 70-79 for related.
- "reply" must be ≤80 chars, start with an emoji.
- "reason" must be ≤100 chars, explain WHY this skill fits the user's specific request.`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout
    const res = await fetch('https://ai-gateway.vercel.app/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'auto', // AI Gateway auto-routes to best available model
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        max_tokens: 600,
        temperature: 0.3,
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.error('AI Gateway non-2xx:', res.status, await res.text());
      return null;
    }
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) return null;
    const parsed = JSON.parse(content);
    // Validate shape
    if (!parsed.reply || !Array.isArray(parsed.recommendations)) return null;
    // Filter to skills actually in catalog (defense in depth)
    const validSlugs = new Set(SKILLS.map((s) => s.slug));
    parsed.recommendations = parsed.recommendations.filter((r) => validSlugs.has(r.slug));
    if (parsed.recommendations.length === 0) return null;
    return parsed;
  } catch (err) {
    console.error('AI Gateway error:', err?.message || err);
    return null;
  }
}

// ─── Handler ───────────────────────────────────────────────────────────────
export default async function handler(req) {
  // CORS — allow the same origin (PWA) and localhost for dev
  const origin = req.headers.get('origin') || '';
  const corsOrigin = origin.match(/^(https?:\/\/(localhost|127\.0\.0\.1|opencode-accomplishments\.vercel\.app|marktantongco\.github\.io)(:\d+)?))/)
    ? origin
    : 'https://marktantongco.github.io';

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers });
  }
  const message = (body?.message || '').toString().trim().slice(0, 1000); // cap at 1k chars
  if (!message) {
    return new Response(JSON.stringify({ error: 'Missing "message" field' }), { status: 400, headers });
  }

  // Try AI Gateway first (if configured); fall back to rules
  const aiResult = await aiGatewayRecommend(message);
  const result = aiResult || ruleBasedRecommend(message);
  const source = aiResult ? 'ai-gateway' : 'rules';

  return new Response(
    JSON.stringify({ ...result, source, model: aiResult ? 'vercel-ai-gateway' : 'intent-map' }),
    { status: 200, headers }
  );
}
