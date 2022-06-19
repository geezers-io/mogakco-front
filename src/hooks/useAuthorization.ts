import { useMe } from 'stores';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { UserService } from 'providers';
import { useDidMountEffect } from 'hooks/useDidMountEffect';
import { Redirect } from 'common';
import { isUnauthorizeError, showError } from 'utils/error';

export function useAuthorization({ redirectIfHasMe = false } = {}): void {
  const updateMe = useMe((state) => state.updateMe);
  const router = useRouter();

  const authorize = useCallback(async () => {
    try {
      updateMe(await UserService.me());

      if (redirectIfHasMe) {
        await router.replace(Redirect.SERVICE);
      }
    } catch (e) {
      if (!redirectIfHasMe && isUnauthorizeError(e)) {
        await router.replace(Redirect.HOME);
        return;
      }
      showError(e);
    }
  }, [redirectIfHasMe, router, updateMe]);

  useDidMountEffect(authorize);
}
