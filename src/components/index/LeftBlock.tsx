import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { media } from 'styles';
import { withAnimation } from 'hoc';

interface Props {
  title: string;
  content: string;
  imgPath: string;
}

const LeftBlock = ({ title, content, imgPath }: Props) => {
  return (
    <Container>
      <ContentWrapper>
        <section>
          <h1>{title}</h1>
          <p>{content}</p>
        </section>
      </ContentWrapper>

      <ImageWrapper>
        <Image src={imgPath} layout="responsive" width={1000} height={700} />
      </ImageWrapper>
    </Container>
  );
};

export const Container = withAnimation(
  'fadeIn',
  styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 9rem;

    ${media.lg} {
      flex-direction: row;
      padding-left: 1.5rem;
    }
  `,
  { origin: 'right' }
);

export const ContentWrapper = withAnimation(
  'fadeIn',
  styled.section`
    width: 100%;
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    h1 {
      font-weight: 700;
      font-size: 2.1rem;
      text-align: center;
      word-break: keep-all;
    }
    p {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1.3rem;
      text-align: center;
      word-break: keep-all;
      line-height: 1.4;
      padding: 0 3rem;

      ${media.sm} {
        margin-top: 1rem;
        padding: 0 2.2rem;
      }
      ${media.md} {
        padding: 0 4rem;
      }
      ${media.lg} {
        padding: 0 2.2rem;
      }
      ${media.xl} {
        padding: 0 4rem;
      }
    }
    ${media.lg} {
      width: 50%;
      order: 0;
      margin-top: initial;
      padding-right: 4.5rem;
    }
  `,
  { origin: 'left' }
);

export const ImageWrapper = styled.section`
  width: 75%;
  order: 0;

  ${media.lg} {
    width: 50%;
    order: 1;
  }
`;

export default LeftBlock;
