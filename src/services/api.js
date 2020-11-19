import axios from 'axios';
import {BACKEND_URL} from '../const';

const TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSucess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSucess, onFail);

  return api;
};
