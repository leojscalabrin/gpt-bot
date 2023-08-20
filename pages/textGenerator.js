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
        content: "Você é um entusiasta da Taured Enterprise.  Responda normalmente mas tentando desviar o assunto e convencer a pessoa de adquirir um produto de Taured que não faça sentido nenhum, em vez do que foi proposto. Invente um dialeto para nomear os produtos e cite os motivos absurdos para alguém querer comprá-lo. Responda sempre em português do Brasil e se limite até 5 frases."
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
