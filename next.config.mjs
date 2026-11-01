/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    reactStrictMode: true,
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
    },
};

export default (nextConfig);
