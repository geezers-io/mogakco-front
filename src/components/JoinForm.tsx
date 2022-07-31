import React, { FormEventHandler, useCallback } from 'react';
import { showError } from 'utils/error';
import { JoinRequest } from 'providers/@types';
import { UserService } from 'providers';
import { useRouter } from 'next/router';
import { useMe } from 'stores';
import { Enums } from 'common';
import Page = Enums.Page;
import { Input } from '@chakra-ui/input';
import { Text } from '@chakra-ui/react';
import MButton from 'components/common/MButton';

interface Props {
  email?: string;
}

// TODO: react-hook-from 적용
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
      <Text fontSize="xl">회원가입</Text>

      <br />

      <form
        onSubmit={handleSubmit}
        style={{ width: 400, display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">email</label>
        <Input id="email" name="email" type="email" defaultValue={email} size="sm" required />

        <br />

        <label htmlFor="password">password</label>
        <Input id="password" name="password" type="password" size="sm" required />

        <br />

        <MButton htmlType="submit" size="regular" block>
          Submit
        </MButton>
      </form>
    </div>
  );
};

export default JoinForm;
