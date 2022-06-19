import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8081';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
});

// api.interceptors.response.use(undefined, async (error: AxiosError) => {
//   const router = useRouter();
//
//   if (error.response?.status === ErrorCode.UNAUTHORIZED) {
//     await router.replace(Redirect.HOME);
//     return;
//   }
//
//   return Promise.reject(error);
// });
