import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Vercel caching headers for static assets
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

if (isGitHubPages) {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.basePath = "/opencode-accomplishments";
  nextConfig.assetPrefix = "/opencode-accomplishments/";
  nextConfig.trailingSlash = true;
}

export default nextConfig;
