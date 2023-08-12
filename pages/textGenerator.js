require("dotenv").config({path: '../.env'})
const got = require('got');

const { Configuration, OpenAIApi } = require("openai");

async function generate(input) {
  // const url = 'https://api.openai.com/v1/engines/davinci/completions';
  // const params = {
  //   "prompt": prompt,
  //   "max_tokens": 160,
  //   "temperature": 0.7,
  //   "frequency_penalty": 0.5
  // };
  // const headers = {
  //   'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  // };

  // const response = await got.post(url, { json: params, headers: headers }).json();
  // output = `${prompt}${response.choices[0].text}`;
  // output = `${response.text}`
  // console.log(response)
  // return output;

  const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  userInterface.prompt();
  
  userInterface.on("line", async (input) => {
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      })
      .then((res) => {
        console.log(res.data.choices[0].message.content);
        userInterface.prompt();
      })
      .catch((e) => {
        console.log(e);
      });
  });
}

module.exports = { generate };
