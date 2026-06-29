// /api/recommend.ts — Vercel AI Gateway edge function + 21st.dev component search
// Powers the opencode OS chat widget's recommendation engine.
//
// Route: POST /api/recommend  { message: string }
// Returns: {
//   reply: string,
//   recommendations: [{ name, slug, score, reason }],
//   components?:  [{ name, slug, description, url, install }],   // when 21st.dev matches
//   source: 'ai-gateway' | 'rules' | '21st-dev' | 'hybrid',
//   model:  string
// }
//
// Strategy:
//   1. Detect "component-for-X" intent (e.g. "find me a component for a date picker",
//      "react button", "shadcn modal", "21st component"). If matched, query 21st.dev API.
//   2. In parallel, try Vercel AI Gateway for skill recommendations.
//   3. Fall back to deterministic rule-based INTENT_MAP if AI is unavailable.
//   4. Always returns the same JSON shape so the client never breaks.
//
// Env vars (configured in Vercel project settings):
//   - AI_GATEWAY_API_KEY   (Vercel AI Gateway)
//   - TWENTYFIRST_API_KEY   (21st.dev) — falls back to embedded demo key if unset.
//     NOTE: canonical env var name is TWENTYFIRST_API_KEY (no underscore between
//     TWENTY and FIRST). The 21st.dev SDK auto-resolves this name; do not use
//     TWENTY_FIRST_API_KEY (the SDK will not find it).

export const config = {
  runtime: 'edge',
};

// ─── Embedded 21st.dev key (fallback if env var is unset) ───────────────────
// The user explicitly provided this key for the project; we keep it as a
// fallback so the feature works on first deploy without manual env config.
// Production: set TWENTYFIRST_API_KEY in Vercel Project → Settings → Env Vars.
const TWENTYFIRST_KEY_FALLBACK =
  'an_sk_7426c194af098c067b4ff71f75406eaca00156f85b050f145f6f16460947a24d';

// ─── Skill catalog (mirror of client SKILLS_DATA, top 30 most-installed) ───
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

// ─── 21st.dev component search ─────────────────────────────────────────────
//
// The 21st.dev API exposes 5,000+ community React components. We detect
// "find me a component for X" / "react X component" / "21st X" intent and
// query the API to return real, installable components alongside skill recs.
//
// Endpoint: https://21st.dev/api/components
// Auth: Bearer <api key>
// Response shape (truncated): { data: [{ id, name, slug, description, url, install, ... }] }

// Patterns that indicate the user is asking for a UI component, not a skill.
const COMPONENT_INTENT_PATTERNS = [
  /\bfind me a component\b/i,
  /\breact (component|widget|primitive|element)\b/i,
  /\bshadcn[ /.][\w-]+/i,
  /\b21st[ /.][\w-]+/i,
  /\b(component|widget|primitive) for\b/i,
  /\b(ui|ux) (component|widget|element|primitive)\b/i,
  /\b(button|modal|dialog|dropdown|combobox|datepicker|date-picker|date range|popover|tooltip|toast|alert|card|tab|accordion|carousel|command|context menu|sidebar|navbar|table|data table|form|input|select|checkbox|radio|switch|slider|badge|avatar|skeleton|progress|spinner|separator|scroll-area|navigation menu|menubar|breadcrumb|pagination|toggle|toolbar|aspect ratio|collapsible|hover card|radio group|toggle group)\b/i,
];

function isComponentIntent(message) {
  return COMPONENT_INTENT_PATTERNS.some((re) => re.test(message));
}

// Extract the most likely search query from the user's message.
function extractComponentQuery(message) {
  // Strip leading "find me a component for", "react component for", etc.
  let q = message
    .replace(/^(find|get|show|give) me a (react )?(ui |ux )?(component|widget|primitive|element) (for|to|that|which|like)?\s*/i, '')
    .replace(/^(i (need|want|am looking for))\s*/i, '')
    .replace(/\b(react|next\.?js|shadcn|21st|ui|ux|component|widget|primitive|element)\b/gi, ' ')
    .replace(/\b(for|to|that|which|like|with|please|a|an|the)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  // Fallback to the raw message if we stripped too aggressively
  if (q.length < 2) q = message.trim();
  return q.slice(0, 80); // API doesn't need long queries
}

async function searchTwentyFirst(message) {
  const apiKey = process.env.TWENTYFIRST_API_KEY || TWENTYFIRST_KEY_FALLBACK;
  if (!apiKey) return null;

  const query = extractComponentQuery(message);
  if (!query) return null;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000); // 6s timeout

    // 21st.dev API: GET /api/components?q=<query>
    // Doc: https://21st.dev/docs/api
    const url = `https://21st.dev/api/components?q=${encodeURIComponent(query)}&limit=5`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
        'User-Agent': 'opencode-OS-recommender/1.0',
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.error('21st.dev non-2xx:', res.status, await res.text().catch(() => '<no body>'));
      return null;
    }

    const data = await res.json();
    // The API returns either { data: [...] } or [ ... ] — handle both
    const list = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];
    if (!list.length) return null;

    const components = list.slice(0, 5).map((c, i) => ({
      name: c.name || c.title || c.slug || `Component ${i + 1}`,
      slug: c.slug || (c.id ? String(c.id) : null),
      description: (c.description || c.short_description || '').slice(0, 200),
      url: c.url || c.html_url || (c.slug ? `https://21st.dev/registry/${c.slug}` : 'https://21st.dev'),
      install: c.install || c.install_command || (c.slug ? `npx twenty-first@latest add ${c.slug}` : null),
      score: 95 - i * 5,
    })).filter((c) => c.slug || c.install);

    if (!components.length) return null;

    return {
      query,
      components,
    };
  } catch (err) {
    console.error('21st.dev error:', err?.message || err);
    return null;
  }
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
  const corsOrigin = origin.match(/^(https?:\/\/(localhost|127\.0\.0\.1|opencode-accomplishments\.vercel\.app|marktantongco\.github\.io)(:\d+)?)/)
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

  // ─── Parallel dispatch ───────────────────────────────────────────────────
  // If the message looks like a component search, query 21st.dev AND skill
  // recommenders in parallel. Otherwise just do skill recommendation.
  const componentIntent = isComponentIntent(message);

  const [aiResult, componentResult] = await Promise.all([
    aiGatewayRecommend(message),
    componentIntent ? searchTwentyFirst(message) : Promise.resolve(null),
  ]);

  // Skill recommendations: AI first, then rule-based fallback
  const skillResult = aiResult || ruleBasedRecommend(message);
  const skillSource = aiResult ? 'ai-gateway' : 'rules';

  // Build the response
  const response = {
    ...skillResult,
    source: skillSource,
    model: aiResult ? 'vercel-ai-gateway' : 'intent-map',
  };

  // Attach component results if we got any
  if (componentResult && componentResult.components.length) {
    response.components = componentResult.components;
    response.componentQuery = componentResult.query;
    // Upgrade the reply to mention the components
    if (componentIntent) {
      const compWord = componentResult.components.length === 1 ? 'component' : 'components';
      const compReply = `🧩 Found ${componentResult.components.length} ${compWord} matching "${componentResult.query}" via 21st.dev — plus skill picks:`;
      // If AI gave us a skill reply, append it; otherwise use the comp reply alone
      response.reply = skillSource === 'ai-gateway'
        ? compReply
        : compReply;
      response.source = skillSource === 'ai-gateway' ? 'hybrid' : '21st-dev';
      response.model = `${response.model}+21st-dev`;
    }
  }

  return new Response(
    JSON.stringify(response),
    { status: 200, headers }
  );
}
