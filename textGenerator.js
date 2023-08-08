require("dotenv").config()
const got = require('got');

async function generate(question) {
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const prompt = `Baseg ${question}`
  const params = {
    "prompt": prompt,
    "max_tokens": 160,
    "temperature": 0.7,
    "frequency_penalty": 0.5
  };
  const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  const response = await got.post(url, { json: params, headers: headers }).json();
  output = `${prompt}${response.choices[0].text}`;
  return output;
}

module.exports = { generate };
