/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;