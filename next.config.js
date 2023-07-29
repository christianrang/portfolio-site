/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "via.placeholder.com",
                pathname: "/1920x1080",
            },
        ],
    },
};
