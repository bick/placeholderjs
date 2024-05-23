import mdx from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import prettyCodeOptions from './rehype-pretty-code-config.js';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        rehypePlugins: [
            [rehypePrettyCode, prettyCodeOptions],
            rehypeRaw,
        ],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "",
    images: {
        unoptimized: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
