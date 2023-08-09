const generator = require("./textGenerator");
require("dotenv").config();
const tmi = require("tmi.js");

const reputation = {};
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
  // channels: ["taurediano", "k1notv", "themalkavianx", "granjas", "bard0oo0", "blacksmith_god", "marjoux", "xparchon", "zeszin"],
  channels: ["taurediano"],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  if (self) {
    return;
  }
  const baseg = [
    "Baseg",
    "Baseg 👍",
    "Baseg 🔪",
    "Baseg ✌️",
    "Baseg 🤞",
    "Baseg 🖖",
    "Baseg 🤘",
    "Baseg 🤙",
    "Baseg 💪",
    "Baseg 👈",
    "Baseg 👉",
    "Baseg ☝️",
    "Baseg 👆",
    "Baseg 🖕",
    "Baseg 👇",
    "Baseg 🖐️",
    "Baseg ✋",
    "Baseg 👌",
    "Baseg 👍",
    "Baseg 👎",
    "Baseg ✊",
    "Baseg 👊",
    "Baseg 🤛",
    "Baseg 🤜",
    "Baseg 🤚",
    "Baseg 👋",
    "Baseg 🤟",
    "Baseg 🤏",
    "Baseg ✍️",
    "Baseg 👏",
    "Baseg 👐",
    "Baseg 🙌",
    "Baseg 🤲",
    "Baseg 🥊",
    "Baseg 🙏",
    "Baseg 🤝",
    "Baseg 💅",
    "Baseg 🦾",
    "Parabéns! Você encontrou um Baseg Shiny, você não ganhou absolutamente nada. BloodTrail ",
  ];

  let command = message.toLowerCase();
  // console.log(command, "command")

  if (command.includes("baseg")) {
    client.say(channel, `${baseg[(Math.floor(Math.random() * baseg.length))]}`);
  }

  if (command.includes("taured")) {
    if (channel === "k1notv") {
      client.say(channel, "TAURED");
    }
  }

  if (command.includes("taurediano")) {
    // (async () => {
    //     client.say(channel, `@${tags.username}, ${await generator.generate(command)}`);
    //   })();
    client.say(channel, `@${tags.username} ${baseg[(Math.floor(Math.random() * baseg.length))]}`);
  }
});
