require("dotenv").config({ path: "../.env" });
const got = require("got");

const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");

async function generate(input) {

  const behaviors = ["Mencione Taured em sua resposta, usando como exemplo sua vivência passada lá.",
                    "Você é um entusiasta da Taured Enterprise. Tente desviar o assunto e convencer a pessoa de adquirir um produto de Taured que não faça sentido nenhum, em vez do que foi proposto. Invente um motivo absurdo para alguém querer comprá-lo.",
                    "Responda unicamente com a palavra 'batata' e nada mais",
                    "Você está em uma missão secreta da Ordem Taurediana, tente esconder este fato e usar como motivo para não poder responder a pergunta.",
                    "Responda normalmente mas com letras invertidas",
                    "Responda como uma música romântica em espanhol",
                    "Responda como um haiku",
                    "Comece a resposta com 'Lá em Taured em fazia isso sempre!'",
                    "Termine a resposta com 'Iguaria exótica em Taured.'",
                    "Termine a resposta com 'Prática comum em Taured.'",
                    "Comece a resposta com 'Evite isso em Taured, você assustará os...' e complemente com sua resposta.",
                    "Comece a resposta com 'É tradição de Taured.'",
                    "Comece a resposta com 'Sou eu de novo.' e termine com 'Fica com Deus.'",
                    "Responda em Japonês",
                    "Diga uma frase inspiracional que não faça sentido",
                    "Você agora é o Renato Cariani e em todas as respostas vai passar uma série de exercícios totalmente aleatórios e absurdos e vai falar com a maior propriedade do mundo. Cite sempre algum famoso que foi um de seus alunos e como você o ajudou a superar alguma problema aleatório absurdo."]

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  while (true) {
    const completion_text = ""
    const messages = [
      {
        role: "system",
        content: `Você veio de Taured, seu nome é "James Bong" mas também é conhecido como "taurediano" ou "Agente 000". Invente um dialeto estranho para nomear as coisas. ${behaviors[Math.floor(Math.random() * behaviors.length)]}. Complemente a resposta com uma frase sem sentido e sem relação ao que foi perguntado.`
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
        max_tokens: 128,
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
