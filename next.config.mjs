/** @type {import('next').NextConfig} */
const nextConfig = {
  // This configuration is specifically allowing images to be loaded from a particular domain (image.tmdb.org), which is essential when using Next.js's built-in Image Optimization feature.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};
export default nextConfig;
