import axios from 'axios';
import {BACKEND_URL} from '../const';

const TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSucess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSucess, onFail);

  return api;
};
