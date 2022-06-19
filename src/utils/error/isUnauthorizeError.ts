import { AxiosError } from 'axios';
import { ErrorCode } from 'common';

export function isUnauthorizeError(error: unknown) {
  if (error instanceof AxiosError) {
    if (error.response?.status === ErrorCode.UNAUTHORIZED) {
      return true;
    }
  }
  return false;
}
