import axios from 'axios';

export default axios.create({
  baseURL: 'https://trace-backend.herokuapp.com/',
  // baseURL: 'https://localhost:5000',
});