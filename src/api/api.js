import axios from 'axios';
const local = process.env.LOCAL_BASE_URL;
const production = process.env.PRODUCTION_BASE_URL;
const api = axios.create({
  baseURL: `${production}/api`,
  withCredentials: true,
});
export default api;
