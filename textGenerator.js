const got = require('got');

async function generate(prompt) {
  const url = 'https://api.openai.com/v1/completions/gpt-3.5-turbo';
  const params = {
    "prompt": prompt,
    "max_tokens": 160,
    "temperature": 0.7,
    "frequency_penalty": 0.5
  };
  const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  };

  const response = await got.post(url, { json: params, headers: headers }).json();
  output = `${prompt}${response.choices[0].text}`;
  return output;
}

module.exports = { generate };