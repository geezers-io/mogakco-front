import React from 'react';
import styled from '@emotion/styled';
import { withAnimation } from 'hoc';

const Footer = () => {
  return (
    // TODO: 차후 컨텐츠 추가 예정
    <Container>
      <TempText>[ 컨텐츠 추가 예정입니다 ]</TempText>
    </Container>
  );
};

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  margin-top: 5rem;
  background: ${({ theme }) => theme.index_header_bg};
`;

export const TempText = withAnimation<'h3'>(
  'fadeIn',
  styled.h3`
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.txt_default};
  `,
  { origin: 'bottom' }
);

export default Footer;
