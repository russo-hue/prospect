import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

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
        basePath: "/prospect",
        assetPrefix: "/prospect/",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
