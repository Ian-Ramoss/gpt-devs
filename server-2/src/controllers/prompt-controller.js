const openAi = require('../../openai');

module.exports = () => {
    const controller = {};

    // Método para lidar com a solicitação POST
    controller.OpenAi = async (req, res) => {
        try {
            // Obter a mensagem enviada no corpo da solicitação
            const { message } = req.body;
            
            // Chamar a função main do OpenAI para obter a resposta
             const response = await openAi.main(message);
            // console.log(response)
            // Retornar a resposta do OpenAI como parte da resposta HTTP
            res.status(200).json({ response });
        } catch (error) {
            console.error('Erro ao processar solicitação:', error);
            res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    };

    return controller;
};




/*const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai.js");

module.exports = {
    async sendText(request, response) {
        // Inicialização do OpenAI
        const openaiAPI = openai.main();

        // Criação do modelo de entrada
        const inputModel = new inputPrompt(request.body);

        try {
            // Envio da solicitação para o OpenAI
            const completionResponse = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            );

            // Extração da resposta do OpenAI e envio como resposta
            const responseData = completionResponse.data.choices[0].text;
            return response.status(200).json({
                success: true,
                data: responseData
            });
        } catch (error) {
            // Tratamento de erros
            let errorMessage = "There was an issue on the server";
            if (error.response && error.response.data) {
                errorMessage = error.response.data;
            }
            return response.status(400).json({
                success: false,
                error: errorMessage
            });
        }
    }
};*/


/*const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai.js")

module.exports = { 

    async sendText(requisicao, resposta){
        const openaiAPI = openai.main()
        const inputModel = new inputPrompt(requisicao.body)
        try{
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            )

            return resposta.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error){
            return resposta.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : "there was an issue on the server"
            })
        }
    }
}*/