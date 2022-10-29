import axios from 'axios';

export const CarsApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});
