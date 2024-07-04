const { OpenAI } = require('openai')
//import OpenAI from "openai";
require("dotenv").config()

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "You are a helpful assistant." }]
    
  });

  console.log(completion.choices[0]);
}

main();