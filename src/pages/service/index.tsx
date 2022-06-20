import { NextPage } from 'next';
import React, { useCallback } from 'react';
import { useTrackedMe } from 'stores';
import { UserService } from 'providers';
import { useRouter } from 'next/router';
import { Enum } from 'common';
import RouteRoot = Enum.RouteRoot;

const Service: NextPage = () => {
  const me = useTrackedMe();
  const router = useRouter();

  const logout = useCallback(async () => {
    await UserService.logout();
    await router.push(RouteRoot.HOME);
  }, [router]);

  return (
    <div>
      <h1>Service page</h1>
      <p>My id: {me.id ?? 'not fetched'}</p>
      <p>My email: {me.email ?? 'not fetched'}</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Service;
