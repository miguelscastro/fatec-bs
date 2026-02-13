import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tarefa-backend.onrender.com',
});
