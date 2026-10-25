const basePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/portfolio" : "")
).replace(/\/$/, "");
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://suleynanauir.github.io${basePath}`
).replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
