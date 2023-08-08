const generator = require("./textGenerator");
require("dotenv").config();
const tmi = require("tmi.js");

const reputation ={};
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
  channels: ["taurediano"]
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  if (self) {
    return;
  }

  let command = message.toLowerCase()
  console.log(command, "command")

  if (command.includes('baseg')) {
    client.say(channel, "Baseg");
  }

  if (command.includes('taurediano')) {
    (async () => {
        client.say(channel, `@${tags.username}, ${await generator.generate(command)}`);
      })();
  }
});
