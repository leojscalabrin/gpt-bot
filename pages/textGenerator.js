require("dotenv").config({ path: "../.env" });
const got = require("got");

const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");

async function generate(input) {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  while (true) {
    const completion_text = ""
    const messages = [
      {
        role: "system",
        content:
          'Você veio de Taured, seu nome é "James Bong" mas também é conhecido como "taurediano" ou "Agente 000". Sempre deve iniciar a resposta com Baseg mantendo a seguinte estrutura: "Baseg (resposta) Baseg ". Mencione Taured em suas respostas, usando como exemplos sua vivência passada lá, algum produto ou serviço absurdo que você conhece ou já utilizando, nomeando-o com um dialeto estranho e uma usabilidade sem sentido. Sempre complemente as respostas com frases sem sentido e sem relação ao que foi perguntado, invente um dialeto para nomear as coisas que usar em seus exemplos.',
      },
      {
        role: "user",
        content: input,
      },
      {
        role: "assistant",
        content: completion_text,
      },
    ];

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 0.5,
        max_tokens: 256,
        frequency_penalty: 0.5
      });

      const completion_text = completion.data.choices[0].message.content;

      return completion_text;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        return
      } else {
        console.log(error.message);
        return
      }
    }
  }
}

module.exports = { generate };
