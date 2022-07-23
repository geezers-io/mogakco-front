import React, { FormEventHandler, useCallback } from 'react';
import { showError } from 'utils/error';
import { JoinRequest } from 'providers/@types';
import { UserService } from 'providers';
import { useRouter } from 'next/router';
import { useMe } from 'stores';
import { Enums } from 'common';
import Page = Enums.Page;

interface Props {
  email?: string;
}

const JoinForm: React.FC<Props> = ({ email }) => {
  const updateMe = useMe((state) => state.updateMe);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const form = e.target as HTMLFormElement;
        const body = Array.from(form.querySelectorAll('input')).reduce((acc, input) => {
          acc[input.name as keyof JoinRequest] = input.value;
          return acc;
        }, {} as JoinRequest);

        const { me } = await UserService.join(body);
        updateMe(me);

        await router.replace(Page.SERVICE);
      } catch (e) {
        showError(e);
      }
    },
    [router, updateMe]
  );

  return (
    <div>
      <h1>회원가입</h1>

      <br />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          email &nbsp;
          <input name="email" type="email" defaultValue={email} required />
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

export default JoinForm;
