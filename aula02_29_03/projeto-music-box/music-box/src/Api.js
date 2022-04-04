import axios from 'axios';

const api = axios.create({

    baseURL: 'https://62438dfd3da3ac772b03cf28.mockapi.io/musicas'

}); 

export default api;