import { AxiosError } from 'axios';
import { Enum } from 'common';

export function isUnauthorizeError(error: unknown) {
  if (error instanceof AxiosError) {
    if (error.response?.status === Enum.ErrorCode.UNAUTHORIZED) {
      return true;
    }
  }
  return false;
}
