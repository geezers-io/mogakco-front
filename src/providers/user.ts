import { api } from 'providers/common/axios';
import { UserServiceClient, LoginResponse, JoinResponse, Empty, Me } from 'providers/@types';

export const UserService: UserServiceClient = {
  async me() {
    const { data } = await api.post<Me>('/api/v1/me');

    return data;
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
