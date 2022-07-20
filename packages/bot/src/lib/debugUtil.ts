/**
 * Debug utility module
 */
import {
  ENVIRONMENT,
  DEPLOY_BRANCH,
  DEV_CHANNEL_ALLOWED_LIST,
  PROD_CHANNEL_ALLOWED_LIST,
} from "./config";

export const isProd = ENVIRONMENT === "production";

/**
 * returns dev server information on a Railway project
 * @returns {object}
 */
export const getDebugInfo = function () {
  return {
    date: Date.now().toLocaleString(),
    isProd: isProd,
    branch: DEPLOY_BRANCH,
    env: ENVIRONMENT,
    devChannel: DEV_CHANNEL_ALLOWED_LIST,
    prodChannel: PROD_CHANNEL_ALLOWED_LIST,
  };
};

/**
 * prepend deployment information to the message
 */
export const printDebugInfo = function (message: string): string {
  if (isProd) {
    return message;
  }
  const info = getDebugInfo();
  let logMsg = "ENV: " + info.env;
  if (info.branch) {
    logMsg += " BRANCH: " + info.branch;
  }
  logMsg = "[" + logMsg + "] ";
  return logMsg + message;
};

/**
 * @param {string} channelId
 * string type for the channelId is a workaround for the numeric rounding error like below.
 *   Number(920277169509367858) -> 920277169509367800
 *   parseInt(920277169509367858, 10) -> 920277169509367800
 * @returns {boolean}
 */
export const isDevChannel = function (channelId: string): boolean {
  return checkChnanelAllowedList(channelId, DEV_CHANNEL_ALLOWED_LIST);
};

/**
 * @param {string} channelId
 * string type for the channelId is a workaround for the numeric rounding error like below.
 *   Number(920277169509367858) -> 920277169509367800
 *   parseInt(920277169509367858, 10) -> 920277169509367800
 * @returns {boolean}
 */
export const isProdChannel = function (channelId: string): boolean {
  return checkChnanelAllowedList(channelId, PROD_CHANNEL_ALLOWED_LIST);
};

const checkChnanelAllowedList = (
  id: string,
  allowedList: string[],
): boolean => {
  // The check is deactivated if the white list was unavailable.
  if (!allowedList.length) {
    console.info(
      "channel check is disabled due to the allowed list was unavailable",
    );
    return true;
  }
  return allowedList.includes(id);
};
