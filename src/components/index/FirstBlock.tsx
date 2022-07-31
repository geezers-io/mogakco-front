import React, { FormEventHandler, RefObject, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import { media } from 'styles';
import MButton from 'components/common/MButton';
import { withAnimation } from 'hoc';
import { css } from '@emotion/react';
import { Input } from '@chakra-ui/input';

interface Props {
  title: string;
  content: string;
  imgPath: string;
  emailInputRef: RefObject<HTMLInputElement>;
}

const LeftBlock = ({ title, content, imgPath, emailInputRef }: Props) => {
  const router = useRouter();

  const toJoin: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      await router.push({
        pathname: '/join',
        query: {
          email: emailInputRef.current?.value ?? '',
        },
      });
    },
    [emailInputRef, router]
  );

  return (
    <Container>
      <ContentWrapper>
        <section>
          <h1>{title}</h1>
          <p>{content}</p>
          <Form onSubmit={toJoin} spellCheck="false">
            <EmailInput
              ref={emailInputRef}
              type="email"
              placeholder="이메일 입력"
              spellCheck="false"
              required
            />
            <JoinButton htmlType="submit">회원가입</JoinButton>
          </Form>
        </section>
      </ContentWrapper>

      <ImageWrapper>
        <Image src={imgPath} layout="responsive" width={1000} height={700} />
      </ImageWrapper>
    </Container>
  );
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;

  ${media.lg} {
    flex-direction: row;
    padding-left: 2.8rem;
  }
`;

const contentWrapperFontStyles = () => {
  return css`
    h1 {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      word-break: keep-all;

      ${media.sm} {
        font-size: 3rem;
        white-space: nowrap;
      }
      ${media.md} {
        font-size: 3.2rem;
      }
      ${media.lg} {
        font-size: 2.4rem;
        text-align: initial;
      }
    }
    p {
      font-size: 1.3rem;
      font-weight: 400;
      text-align: center;
      word-break: keep-all;
      line-height: 1.4;

      ${media.sm} {
        font-size: 1.5rem;
      }
      ${media.md} {
        font-size: 1.66rem;
      }
      ${media.lg} {
        font-size: 1.5rem;
        text-align: initial;
      }
    }
  `;
};

export const ContentWrapper = withAnimation(
  'fadeIn',
  styled.section`
    width: 100%;
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    ${media.lg} {
      width: 50%;
      align-items: initial;
      order: 0;
      margin-top: initial;
      padding-right: initial;
    }

    p {
      margin-top: 1rem;
      padding: 0 1rem;

      ${media.sm} {
        margin-top: 1rem;
        padding: 0 2.2rem;
      }
      ${media.md} {
        padding: 0 4rem;
      }
      ${media.lg} {
        padding: initial;
      }
    }

    ${contentWrapperFontStyles}
  `,
  { origin: 'left' }
);

export const ImageWrapper = withAnimation(
  'fadeIn',
  styled.section`
    width: 75%;
    order: 0;

    ${media.lg} {
      width: 50%;
      order: 1;
    }
  `,
  { origin: 'right' }
);

export const Form = styled.form`
  width: 100%;
  max-width: 30rem;
  height: 2.66rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  ${media.sm} {
    flex-direction: row;
    justify-content: center;
    max-width: 35rem;
  }

  ${media.lg} {
    max-width: 28rem;
  }
`;

export const EmailInput = styled(Input)`
  flex: 1;
  padding: 0.66rem 0.33rem;
  width: 100%;
  height: 100%;
`;

export const JoinButton = styled(MButton)`
  width: 100%;
  height: 100%;
  padding: 1.33rem 2.33rem;

  ${media.sm} {
    width: initial;
  }
`;

export default LeftBlock;
