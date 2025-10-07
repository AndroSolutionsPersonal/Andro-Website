/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arjrjtzgaauweroxjacr.supabase.co',  // Your Supabase project hostname
      },
      // Add more patterns if needed (e.g., for other external hosts)
    ],
  },
};

export default nextConfig;
