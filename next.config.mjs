/** @type {import('next').NextConfig} */
const previewBasePath = process.env.PREVIEW_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: previewBasePath,
  assetPrefix: previewBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
