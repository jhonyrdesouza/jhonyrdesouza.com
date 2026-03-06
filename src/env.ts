import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

const env = createEnv({
  /**
   * Public environment variables (accessible on client and server).
   * IMPORTANT: All must be prefixed with NEXT_PUBLIC_
   *
   * These variables are included in the client bundle, so never include sensitive data.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z
      .string()
      .url()
      .describe("Base URL of the application"),
    NEXT_PUBLIC_GOOGLE_ANALYTICS: z
      .string()
      .optional()
      .describe("Google Analytics ID for tracking"),
    NEXT_PUBLIC_SENTRY_DSN: z
      .string()
      .url()
      .optional()
      .describe("Sentry DSN for client-side error monitoring"),
    NEXT_PUBLIC_AVAILABLE_FOR_HIRE: z
      .preprocess((val) => val === "true", z.boolean())
      .default(false)
      .describe("Flag indicating if you are available for hire"),
  },

  /**
   * Server-side Environment variables, not available on the client. Will throw
   * if you access these variables on the client.
   */
  server: {
    DATABASE_URL: z.string().describe("Database connection URL with pooling"),
    DIRECT_URL: z
      .string()
      .describe("Direct database connection URL for migrations"),

    NEXTAUTH_URL: z
      .string()
      .describe("NextAuth base URL (must match application URL)"),
    NEXTAUTH_SECRET: z
      .string()
      .trim()
      .min(1)
      .describe("Secret key for session encryption"),

    SENTRY_DSN: z
      .string()
      .optional()
      .describe("Sentry DSN for server-side error monitoring"),
    SENTRY_AUTH_TOKEN: z
      .string()
      .optional()
      .describe("Sentry auth token for builds"),

    GOOGLE_ID: z.string().describe("Google OAuth Client ID"),
    GOOGLE_SECRET: z.string().describe("Google OAuth Client Secret"),

    GITHUB_ID: z.string().describe("GitHub OAuth Client ID"),
    GITHUB_SECRET: z.string().describe("GitHub OAuth Client Secret"),
    GITHUB_READ_USER_TOKEN_PERSONAL: z
      .string()
      .describe("Personal GitHub token for reading public data"),

    SPOTIFY_CLIENT_ID: z.string().describe("Spotify API Client ID"),
    SPOTIFY_CLIENT_SECRET: z.string().describe("Spotify API Client Secret"),
    SPOTIFY_CLIENT_REFRESH_TOKEN: z
      .string()
      .describe("Spotify refresh token for API access renewal"),

    WAKATIME_API_KEY: z
      .string()
      .describe("WakaTime API key for code time tracking"),
  },

  /**
   * Shared between server and client
   */
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development")
      .describe("Application execution environment"),
  },

  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_AVAILABLE_FOR_HIRE: process.env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE,

    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,

    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,

    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,

    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_READ_USER_TOKEN_PERSONAL:
      process.env.GITHUB_READ_USER_TOKEN_PERSONAL,

    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_CLIENT_REFRESH_TOKEN: process.env.SPOTIFY_CLIENT_REFRESH_TOKEN,

    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,

    NODE_ENV: process.env.NODE_ENV,
  },
})

export default env
