import axios from 'axios';

// Define a URL para a qual você deseja enviar a solicitação POST
const url = 'http://localhost:5555/api/prompt';

// Define a função makeRequest para enviar a solicitação POST
export const makeRequest = async (message) => {
    console.log("Enviando requisição:", message);

    try {
        const requestBody = {
            "message": "message"
        };
        // Envia a solicitação POST usando axios
        const response = await axios.post(url, requestBody);
        console.log("Resposta da API:", response.data);

        // Retorna os dados da resposta da API
        return response.data;
    } catch (error) {
        // Se ocorrer um erro, imprime o erro no console e lança uma exceção
        console.error('Erro na requisição:', error);
        throw error;
    }
};


// export const makeRequest = async (message) => {
//     console.log("Requisição enviada com sucesso:", message);
//     return { data: message};
// };





/*import axios from 'axios';
const URL_API = 'http://localhost:5555/api/prompt';

export const makeRequest = async (message) => {
    console.log(message);
    const test = {"message": message}; // Definindo a variável test
    try {
        const {data} = await axios.post(URL_API, test);
        return data;
    } catch (error) {
        // Tratamento de erro
        console.error('Erro na requisição:', error);
        throw error; // Lançando o erro novamente para que possa ser tratado no componente que chamou a função
    }
};*/
