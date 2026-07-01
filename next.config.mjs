/**
 * next.config.mjs
 * ----------------------------------------------------------------------------
 * - React strict mode (catches effect double-fire bugs in dev — critical for
 *   the 3-Layer Animation Stack where double-mounting a WebGL context would
 *   leak GPU memory).
 * - The existing /api/recommend.ts edge function is auto-detected by Next.js
 *   (no extra config needed). Its `export const config = { runtime: 'edge' }`
 *   is honored as-is.
 * - Static PWA assets live in /public and are served at the root path, so
 *   existing URLs (/index.html, /kb.html, /sw.js, /manifest.json, /icons,
 *   /stacks.json, /mcp-registry.json) keep working.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Three.js + GSAP + Framer Motion all benefit from granular chunking.
    optimizePackageImports: ['three', 'gsap', 'framer-motion'],
  },
};

export default nextConfig;
