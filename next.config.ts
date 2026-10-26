import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статичний сайт: після `npm run build` усе лежить у папці `out`
  // і заливається на будь-який хостинг (Cloudflare Pages, Netlify тощо).
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
