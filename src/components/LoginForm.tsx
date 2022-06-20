import React, { FormEventHandler, useCallback } from 'react';
import { useRouter } from 'next/router';
import { LoginRequest } from 'providers/@types';
import { UserService } from 'providers';
import { showError } from 'utils/error';
import { useMe } from 'stores';
import { Enums } from 'common';
import RouteRoot = Enums.RouteRoot;

const LoginForm: React.FC = () => {
  const updateMe = useMe((state) => state.updateMe);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const form = e.target as HTMLFormElement;
        const body = Array.from(form.querySelectorAll('input')).reduce((acc, input) => {
          acc[input.name as keyof LoginRequest] = input.value;
          return acc;
        }, {} as LoginRequest);

        console.log('body', body);

        const { me } = await UserService.login(body);
        updateMe(me);

        await router.replace(RouteRoot.SERVICE);
      } catch (e) {
        showError(e);
      }
    },
    [router, updateMe]
  );

  return (
    <div>
      <h1>로그인</h1>

      <br />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          email &nbsp;
          <input name="email" type="email" required />
        </label>
        <label>
          password &nbsp;
          <input name="password" type="password" required />
        </label>

        <br />

        <button type="submit">ㄱㄱ</button>
      </form>
    </div>
  );
};

export default LoginForm;
