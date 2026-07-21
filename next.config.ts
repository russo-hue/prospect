import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Vinext's local Windows worker may not expose the ASSETS binding used by
  // the image optimizer. The source screenshots are already web-sized, so
  // serving them directly avoids the failing /_vinext/image request.
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
