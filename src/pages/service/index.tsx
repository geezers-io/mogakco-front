import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { UserService } from 'providers';
import { useMe } from 'stores';

const Service: NextPage = () => {
  const meId = useMe((state) => state.id);
  const updateMe = useMe((state) => state.updateMe);

  useEffect(() => {
    (async () => {
      updateMe(await UserService.me());
    })();
  });

  return (
    <div>
      <h1>Service page</h1>
      <p>My Id: {meId ?? 'not fetched'}</p>
    </div>
  );
};

export default Service;
