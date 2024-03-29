import React from 'react';
import Link from 'next/link';
import Button from 'components/common/MButton';
import Logo from 'public/svg/logo1.svg';
import { media } from 'styles/media';
import styled from '@emotion/styled';

const Header: React.FC = () => (
  <Container>
    <MainLogo />
    <ButtonsWrapper>
      <Link href="/login">
        <a>
          <Button type="text" size="large">
            로그인
          </Button>
        </a>
      </Link>
      <Link href="/join">
        <a>
          <Button size="large">회원가입</Button>
        </a>
      </Link>
    </ButtonsWrapper>
  </Container>
);

export const Container = styled.header`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0.33rem 0.66rem;

  ${media.sm} {
    padding: 1rem;
  }
`;

export const ButtonsWrapper = styled.section`
  width: fit-content;
  display: flex;
  gap: 0.66rem;
`;

export const MainLogo = styled(Logo)`
  cursor: none;
  pointer-events: none;
  user-select: none;
`;

export default Header;
