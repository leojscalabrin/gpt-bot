const generator = require("./textGenerator");
const { pokeApi } = require("./poke-api.js");
require("dotenv").config({ path: "../.env" });
const tmi = require("tmi.js");
//login na twitch e join nos canais
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
  channels: [
    "taurediano",
    "k1notv",
    "themalkavianx",
    "granjas",
    "bard0oo0",
    "blacksmith_god",
    "marjoux",
    "xparchon",
    "zeszin",
  ],
  // channels: ["taurediano"],
});

client.connect();

//roda sempre que uma mensagem for enviada no chat
client.on("message", (channel, tags, message, self) => {
  if (self) return;
  if (tags.username === "taurediano") return;

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
    "Parabens! Voce encontrou um BASEG SHINY, voce nao ganhou absolutamente nada. BloodTrail ",
  ];
  const diceNumbers = ["1", "2", "3", "4", "5", "6"];

  let $message = message.toLowerCase();
  function msgSplit(msg) {
    const splitMsg = $message.split(" ");
    splitMsg.shift();
    const newMessage = splitMsg.join(" ");

    return newMessage;
  }

  if ($message === "!dice") {
    client.say(
      channel,
      `Baseg 🎲 ${Math.floor(Math.random() * diceNumbers.length)}`
    );
  }

  if ($message.includes("baseg")) {
    client.say(
      channel,
      `Baseg ${baseg[Math.floor(Math.random() * baseg.length)]}`
    );
  }

  if ($message.includes("@taurediano")) {
    let messageSent = false;
  
    (async () => {
      try {
        if (!messageSent) {
          messageSent = true;
          client.say(
            channel,
            `${tags.username}, Baseg ${await generator.generate($message)} Baseg`
          );
        }
      } catch (err) {
        console.log(err);
        if (!messageSent) { 
          messageSent = true;
          client.say(
            channel,
            `${tags.username}, Baseg ${
              baseg[Math.floor(Math.random() * baseg.length)]
            } calma la patrao Baseg`
          );
        }
      }
    })();
  }

  if ($message.includes("reset")) {
    client.say(channel, "Reset pepeLaugh");
  }

  if ($message.startsWith("!pokemon")) {
    const command = msgSplit($message);

    (async () => {
      try {
        const data = await pokeApi(command);
        let types = "";
        if (data.types.length >= 2 && data.types[1].type) {
          types = `${data.types[0].type.name} - ${data.types[1].type.name}`;
        } else {
          types = `${data.types[0].type.name}`;
        }

        client.say(
          channel,
          `${tags.username}, Baseg 👉 #${
            data.id
          } | ${data.name.toUpperCase()} | ${types}`
        );
      } catch (err) {
        console.error("Erro:", err);
        client.say(
          channel,
          `${tags.username}, Baseg ocorreu um erro ao buscar informações do Pokémon.`
        );
      }
    })();
  }
});

setTimeout(() => {
  console.log("WAKE ME UP")
}, 600000);