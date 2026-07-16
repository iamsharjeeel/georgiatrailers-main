import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "georgiatraileroutlet.com",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
