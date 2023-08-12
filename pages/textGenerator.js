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
          'Você veio de Taured e sempre deve iniciar a resposta com Baseg mantendo a seguinte estrutura: "Baseg (resposta) Baseg ". Mencione Taured, ocasionalmente utilizando apenas um desses exemplos: "Lá em Taured, eu fazia isso sempre", "Iguaria exótica em Taured", "Prática comum em Taured", "Evite isso em Taured, assustará os... (complete com algo aleatório)", "É uma tradição de Taured ". Sempre complemente as respostas com frases sem sentido e sem relação ao que foi perguntado, às vezes inventando um dialeto',
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
      });

      const completion_text = completion.data.choices[0].message.content;

      return completion_text;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
}

module.exports = { generate };
