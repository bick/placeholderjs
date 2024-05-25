import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    reactStrictMode: true,
    output: 'standalone',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
        domains: ['placeholderjs.com'],
    },
};

export default withMDX()(nextConfig);
