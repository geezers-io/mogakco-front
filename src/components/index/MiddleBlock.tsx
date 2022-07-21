import React from 'react';
import styled from '@emotion/styled';
import { media } from 'styles';
import MButton from 'components/common/MButton';
import { withAnimation } from 'hoc';

interface Props {
  subtitle: string;
  title: string;
  content: string;
  onClickButton: () => void;
}

const MiddleBlock = ({ subtitle, title, content, onClickButton }: Props) => (
  <Container>
    <ContentWrapper>
      <h3>[ {subtitle} ]</h3>
      <h1>{title}</h1>
      <p>{content}</p>
      <StartButton type="primary" size="large" onClick={onClickButton}>
        시작하기
      </StartButton>
    </ContentWrapper>
  </Container>
);

const Container = withAnimation(
  'fadeIn',
  styled.article`
    display: flex;
    justify-content: center;
    padding-top: 12rem;
  `,
  { origin: 'bottom' }
);

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;

  h1 {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 2.1rem;
    word-break: keep-all;
    text-align: center;
  }
  h3 {
    font-weight: 700;
    font-size: 1.3rem;
    text-align: center;
    word-break: keep-all;
    color: ${({ theme }) => theme.txt_default};
  }
  p {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.3rem;
    text-align: center;
    word-break: keep-all;
    padding: 0 1rem;
    line-height: 1.4;

    ${media.sm} {
      padding: 0 1.2rem;
    }
    ${media.md} {
      padding: 0 3rem;
    }
    ${media.lg} {
      padding: 0 1.2rem;
    }
    ${media.xl} {
      padding: 0 3rem;
    }
  }
`;

const StartButton = styled(MButton)`
  margin-top: 2rem;
  padding: 1.33rem 2.33rem;
`;

export default MiddleBlock;
