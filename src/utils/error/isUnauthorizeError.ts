import { AxiosError } from 'axios';
import { Enums } from 'common';

export function isUnauthorizeError(error: unknown) {
  if (error instanceof AxiosError) {
    if (error.response?.status === Enums.ErrorCode.UNAUTHORIZED) {
      return true;
    }
  }
  return false;
}
