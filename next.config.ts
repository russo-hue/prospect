import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext's local Windows worker may not expose the ASSETS binding used by
  // the image optimizer. The source screenshots are already web-sized, so
  // serving them directly avoids the failing /_vinext/image request.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
