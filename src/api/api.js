import axios from 'axios';
const local = process.env.LOCAL_BASE_URL;
const production = 'https://foodmart-o1ja.onrender.com';
const api = axios.create({
  baseURL: `${production}/api`,
  withCredentials: true,
});
export default api;
