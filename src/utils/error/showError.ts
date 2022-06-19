import { AxiosError } from 'axios';
import { isWindow } from 'utils/global';

export function showError(error: unknown) {
  if (error instanceof AxiosError) {
    const message = error.message ?? error.response?.data.message ?? 'Unknown Error';
    if (isWindow()) {
      alert(message); // TODO: Change to error modal
      console.error(error);
    }

    return;
  }
  if (isWindow()) {
    alert(error); // TODO: Change to error modal
    console.error(error);
  }
}
