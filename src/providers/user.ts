import { api } from 'providers/common/axios';
import { UserServiceClient, LoginResponse, JoinResponse, Empty } from 'providers/@types';
import { SESSION_KEY } from 'common';

export const UserService: UserServiceClient = {
  async authenticate() {
    const { data } = await api.get<Empty>('/api/v1/users/authentication');

    return data;
  },

  async authenticateWithSSR(sessionValue) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      const res = await fetch(API_URL + '/api/v1/users/authentication', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Cookie: `${SESSION_KEY}=${sessionValue};`,
        },
      });

      if (res.status >= 400) {
        throw new Error(`${res.status}`);
      }
    } catch (e) {
      throw e;
    }
  },

  async join(request) {
    const { data } = await api.post<JoinResponse>('/api/v1/users', request);

    return data;
  },

  async login(request) {
    const { data } = await api.post<LoginResponse>('/api/v1/login', request);

    return data;
  },

  async logout() {
    const { data } = await api.post<Empty>('/api/v1/logout', {});

    return data;
  },
};
