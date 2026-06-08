import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {};

if (isGitHubPages) {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.basePath = "/opencode-accomplishments";
  nextConfig.assetPrefix = "/opencode-accomplishments/";
  nextConfig.trailingSlash = true;
}

export default nextConfig;
