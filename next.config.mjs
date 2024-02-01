/** @type {import('next').NextConfig} */
/* @ts-expect-error Async Server Component */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
