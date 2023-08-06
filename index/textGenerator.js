// const got = require("got");
// require('dotenv').config()

// async function generate(prompt) {
//   const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
//   const params = {
//     model: "text-davinci-003",
//     prompt: prompt,
//     max_tokens: 160,
//     temperature: 0.7,
//     frequency_penalty: 0.5,
//   };
//   const headers = {
//     Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
//   };

//   //   const response = await got.post(url, { json: params, headers: headers }).json();
//   //   output = `${prompt}${response.choices[0].text}`;
//   //   return output;
//   try {
//     const response = await got
//       .post(url, { json: params, headers: headers })
//       .json();
//     output = `${prompt}${response.choices[0].text}`;
//     console.log(output);
//   } catch (err) {
//     console.log(err);
//   }
// }

// module.exports = { generate };
