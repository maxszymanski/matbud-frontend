/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1:1337',
                port: '',
                pathname: '/uploads/**',
            },
        ],
        unoptimized: true,
    },
}

export default nextConfig
