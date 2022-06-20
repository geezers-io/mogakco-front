import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDidMountEffect } from 'hooks/useDidMountEffect';
import { Enum } from 'common';
import { isUnauthorizeError, showError } from 'utils/error';

export function useAuthorization({ redirectIfHasMe = false } = {}): void {
  // const updateMe = useMe((state) => state.updateMe);
  const router = useRouter();

  const authorize = useCallback(async () => {
    try {
      // updateMe(await UserService.me());

      if (redirectIfHasMe) {
        await router.replace(Enum.Redirect.SERVICE);
      }
    } catch (e) {
      if (!redirectIfHasMe && isUnauthorizeError(e)) {
        await router.replace(Enum.Redirect.HOME);
        return;
      }
      showError(e);
    }
  }, [redirectIfHasMe, router]);

  useDidMountEffect(authorize);
}
