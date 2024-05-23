import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "",
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
    },
};

export default withMDX()(nextConfig);
