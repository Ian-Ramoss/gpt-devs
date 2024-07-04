const { OpenAI } = require('openai')
require("dotenv").config()

const openai = new OpenAI;

async function main(message) {
    let response = ''; // Inicialize uma variável para acumular a resposta

    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message}],
        stream: true,
    });

    for await (const chunk of stream) {
        response += chunk.choices[0]?.delta?.content || ""; // Acumule o texto de cada chunk
    }

    return response; // Retorne a resposta completa após o loop
}

module.exports = {
    main: main
};



/*module.exports = class openai{
    
	static configuration(){
		const configuration = new Configuration({
			apiKey: process.env.OPENAI_API_KEY,
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
        model: "gpt-3.5-turbo",
        prompt: `${prompt}`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1, 
        frequency_penalty: 0.5,
        presence_penalty: 0,
		}
  }
}*/

/*
Código gerado pela openAI - utilizei o disponibilizado no github do professor, devido config de import

import OpenAI from "openai";


module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
          return new OpenAIApi(configuration)
    }
    
    //ajustado de 0 para 0.5 o frequency penalty e max tokens de 256 para 3500 
    static textCompletion({prompt}){
        return {
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 3500,
            top_p: 1, 
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}*/