import { withSentryConfig } from "@sentry/nextjs"
import type { NextConfig } from "next"

const SentryWebpackPluginOptions = { silent: true }

const isDevelopment = process.env.NODE_ENV === "development"

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  crossOrigin: "anonymous",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "i.scdn.co" },
      { hostname: "spotify.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "ui-avatars.com" },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
}

export default isDevelopment
  ? nextConfig
  : withSentryConfig(nextConfig, SentryWebpackPluginOptions)
