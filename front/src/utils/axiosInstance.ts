import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-starwars-681354bab4e9.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;