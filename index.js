const generator = require("./textGenerator");
const tmi = require("tmi.js");

// const reputation ={};
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
    identity: {
      username: 'taurediano',
      password: process.env.TWITCH_OAUTH_TOKEN
    },
  channels: ["taurediano"],
});

client.connect();

// client.on("connect", function (connection) {
//   connection.sendUTF(
//     "CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands"
//   );
//   connection.sendUTF(`PASS ${env.TWITCH_OAUTH_TOKEN}`);
//   connection.sendUTF("NICK taurediano");
// });

client.on("message", (channel, tags, message, self) => {
  // if(self || !message.startsWith('!')) {
  //   return;
  // }

  // const args = message.slice(1).split(' ');
  // const command = args.shift().toLowerCase();

  // if(command === 'Baseg') {
  //   client.say(channel, 'pau');
  // } else if(command === 'taurediano' || '@taurediano') {
  //   (async () => {
  //     const prompt = args.join(' ');
  //     client.say(channel, `@${tags.username}, ${await generator.generate(prompt)}`);
  //   })();
  // }
  if (self) return;

  if (message.toLowerCase() === "!hello") {
    client.say(channel, `@${tags.username}, Yo what's up`);
  }
});

// (async () => {
//   try {
//     console.log(await generator.generate(`Artist: Megadeth\n\nLyrics:\n`));
//   } catch (err) {
//     console.log(err);
//   }
// })();
