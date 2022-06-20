import React, { useCallback } from 'react';
import { UserService } from 'providers';
import { useRouter } from 'next/router';
import { Enums } from 'common';
import RouteRoot = Enums.RouteRoot;
import { useMe } from 'stores';

const ServiceInfoTemp: React.FC = () => {
  const meId = useMe((state) => state.id);
  const meEmail = useMe((state) => state.email);
  const router = useRouter();

  const logout = useCallback(async () => {
    await UserService.logout();
    await router.push(RouteRoot.HOME);
  }, [router]);

  return (
    <div>
      <p>My id: {meId ?? 'not fetched'}</p>
      <p>My email: {meEmail ?? 'not fetched'}</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default ServiceInfoTemp;
