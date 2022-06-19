import type { NextPage } from 'next';
import Link from 'next/link';
import { useCallback } from 'react';

const openLoginModal = () => {
  alert('open login modal'); // temp
};

const Home: NextPage = () => {
  const handleLoginButtonClick = useCallback(() => {
    openLoginModal();
  }, []);

  return (
    <div>
      <h1>Home page</h1>

      <button onClick={handleLoginButtonClick}>로그인</button>

      <Link href="/join">
        <a>
          <button>회원가입</button>
        </a>
      </Link>
    </div>
  );
};

export default Home;
