const generator = require("./textGenerator");
require("dotenv").config({ path: "../.env" });
const tmi = require("tmi.js");
// import { Configuration, OpenAIApi } from "openai";
// import readline from "readline";

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: "taurediano",
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  // channels: [
  //   "taurediano",
  //   "k1notv",
  //   "themalkavianx",
  //   "granjas",
  //   "bard0oo0",
  //   "blacksmith_god",
  //   "marjoux",
  //   "xparchon",
  //   "zeszin",
  // ],
  channels: ["taurediano"],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  if (self) {
    return;
  }
  const baseg = [
    "👍",
    "🔪",
    "✌️",
    "🤞",
    "🖖",
    "🤘",
    "🤙",
    "💪",
    "👈",
    "👉",
    "☝️",
    "👆",
    "🖕",
    "👇",
    "🖐️",
    "✋",
    "👌",
    "👍",
    "👎",
    "✊",
    "👊",
    "🤛",
    "🤜",
    "🤚",
    "👋",
    "🤟",
    "🤏",
    "✍️",
    "👏",
    "👐",
    "🙌",
    "🤲",
    "🥊",
    "🙏",
    "🤝",
    "💅",
    "🦾",
    "Parabéns! Você encontrou um BASEG SHINY, você não ganhou absolutamente nada. BloodTrail ",
  ];

  let command = message.toLowerCase();
  // console.log(command, "command")

  if (command.includes("baseg")) {
    client.say(
      channel,
      `Baseg ${baseg[Math.floor(Math.random() * baseg.length)]}`
    );
  }

  if (command.includes("taurediano")) {
    (async () => {
        client.say(channel, `@${tags.username}, ${await generator.generate(command)}`);
      })();
    // client.say(
    //   channel,
    //   `${tags.username} Baseg ${
    //     baseg[Math.floor(Math.random() * baseg.length)]
    //   }`
    // );
  }
});
