import axios from 'axios';
import { isWindow } from 'utils/global';
import Router from 'next/router';
import { isUnauthorizeError } from 'utils/error';
import { Enums } from 'common';
import RouteRoot = Enums.RouteRoot;

export const api = axios.create({
  baseURL: RouteRoot.PROXY,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.response.use(undefined, async (error: unknown) => {
  if (isUnauthorizeError(error) && isWindow()) {
    await Router.replace('/');
  }

  return Promise.reject(error);
});
