import axios from 'axios';

export const CarsApi = axios.create({
  baseURL:
    process.env.NEXT_NODE_ENV === 'development' || process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'https://wedevup-tan.vercel.app/api',
});
