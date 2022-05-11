import axios from 'axios'; // importando biblioteca axios das dependências do projeto

// declarando constante com instância do axios que recebe objeto de configuração com a URL base para realizar as requisições
const api = axios.create({
    baseURL: 'https://62438dfd3da3ac772b03cf28.mockapi.io' //-> Minha mockapi
    // baseURL: 'https://62438dff39aae3e3b744128d.mockapi.io'
});

export default api; // exportando a constante api para que possa ser acessada por outros componentes