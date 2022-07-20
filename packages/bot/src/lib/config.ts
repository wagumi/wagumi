/**
 * Config module
 *
 * This utility is to aggregate multiple data sources like below for configurations.
 * - Definition
 * - Env vars
 */

/**
 * Env vars assigned by Railway platform
 */
export const ENVIRONMENT: string =
  process.env.RAILWAY_ENVIRONMENT || "localhost";
export const DEPLOY_BRANCH: string = process.env.RAILWAY_GIT_BRANCH || "";

/**
 * Env vars manually assigned
 */
export const DEV_CHANNEL_ALLOWED_LIST: string[] = ["920167819360993330"]; // team-dev-test channel
export const PROD_CHANNEL_ALLOWED_LIST: string[] = [
  "914960638365810753", // news
  "914993505577877514", // dev
  "915035799920214047", // dao
];
