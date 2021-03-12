import axios from 'axios';

export const key = '22942b9e';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;