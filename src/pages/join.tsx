import { NextPage } from 'next';
import JoinForm from 'components/JoinForm';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Join: NextPage = () => {
  const router = useRouter();
  const email = useMemo(() => router.query.email as string | undefined, [router.query.email]);

  return (
    <div>
      <JoinForm email={email} />
    </div>
  );
};

export default Join;
