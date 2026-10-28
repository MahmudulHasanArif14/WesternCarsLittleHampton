import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos are hot-linked from Unsplash's CDN (free licence, commercial use OK).
    // Swap these for self-hosted client photography before launch — see README.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
