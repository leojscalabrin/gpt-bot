// const generator = require("./textGenerator");
require("dotenv").config();
const tmi = require("tmi.js");

// const reputation ={};
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
  channels: ["taurediano", "k1notv", "themalkavianx", "granjas", "bard0oo0", "blacksmith_god", "marjoux", "xparchon", "zeszin"],
});

client.connect();

// client.on("connect", function (connection) {
//   connection.sendUTF(
//     "CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands"
//   );
//   connection.sendUTF("NICK taurediano");
//   connection.sendUTF(`PASS ${env.TWITCH_OAUTH_TOKEN}`);
// });

client.on("message", (channel, tags, message, self) => {
  if (self) {
    return;
  }

  if (message === "Baseg") {
    client.say(channel, "Baseg");
  }
  
  if(message.toLowerCase() === 'taurediano' || '@taurediano') {
    client.say(channel, `@${tags.username}, Baseg`);
  }
});

// (async () => {
//   try {
//     console.log(await generator.generate(`Artist: Megadeth\n\nLyrics:\n`));
//   } catch (err) {
//     console.log(err);
//   }
// })();
