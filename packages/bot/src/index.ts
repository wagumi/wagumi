import { Client } from "discord.js";

import "dotenv/config";

import {
  isProd,
  getDebugInfo,
  printDebugInfo,
  isDevChannel,
  isProdChannel,
} from "./lib/debugUtil";

const client = new Client();

export const GUILD_ID = "914960638365810748";

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async message => {
  const cmdPrefix = "!";
  if (message.content.startsWith(cmdPrefix)) {
    if (!isProd && !isDevChannel(message.channel.id)) {
      console.warn(
        "only an allowed listed dev channel is available for development",
      );
      console.log(getDebugInfo());
      return;
    } else if (isProd && isProdChannel(message.channel.id)) {
      console.warn(
        "only an allowed listed prod channel is available for production",
      );
      console.log(getDebugInfo());
      return;
    }
  }

  // development-test channel
  if (message.content === "!pingy") {
    let messageString = "Pong.";
    messageString = printDebugInfo(messageString);
    message.channel.send(messageString);
  }
});
