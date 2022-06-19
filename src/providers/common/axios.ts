import axios from 'axios';
import { isWindow } from 'utils/global';
import Router from 'next/router';
import { isUnauthorizeError } from 'utils/error';

const API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8081';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
});

api.interceptors.response.use(undefined, async (error: unknown) => {
  if (isUnauthorizeError(error) && isWindow()) {
    await Router.replace('/');
  }

  return Promise.reject(error);
});
