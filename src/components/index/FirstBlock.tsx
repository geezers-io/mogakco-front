import React, { Ref, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { media } from 'styles';
import MButton from 'components/common/MButton';
import { withAnimation } from 'hoc';
import { Input, InputRef } from 'antd';

interface Props {
  title: string;
  content: string;
  imgPath: string;
  emailInputRef: Ref<InputRef>;
}

const LeftBlock = ({ title, content, imgPath, emailInputRef }: Props) => {
  const router = useRouter();

  const toJoin = async (e: SyntheticEvent) => {
    e.preventDefault();
    await router.push('/join');
  };

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
            <JoinButton color="blue" htmlType="submit">
              회원가입
            </JoinButton>
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
  const fontSizes: Record<
    string,
    {
      h1: string;
      p: string;
    }
  > = {
    xs: {
      h1: '2.2rem',
      p: '1.33rem',
    },
    sm: {
      h1: '3rem',
      p: '1.5rem',
    },
    md: {
      h1: '3.2rem',
      p: '1.66rem',
    },
    lg: {
      h1: '2.4rem',
      p: '1.5rem',
    },
  };
  const mediaFontSizes = (screenSize: keyof typeof media) =>
    `
      ${media[screenSize]} {
        h1 {
          font-size: ${fontSizes[screenSize].h1};
        }
        p {
          font-size: ${fontSizes[screenSize].p};
        }
      }
    `.trim();

  return css`
    p {
      margin-top: 1rem;
      padding: initial;
    }

    ${media.sm} {
      h1 {
        white-space: nowrap;
      }
      p {
        margin-top: 1.33rem;
      }
    }

    ${media.lg} {
      padding-right: initial;
      align-items: initial;

      h1 {
        text-align: initial;
      }
      p {
        text-align: initial;
      }
    }

    ${mediaFontSizes('xs')}
    ${mediaFontSizes('sm')}
    ${mediaFontSizes('md')}
    ${mediaFontSizes('lg')}
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
  height: 3rem;
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
`;

export const JoinButton = styled(MButton)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.33rem;
  padding: 1.33rem 2.33rem;

  ${media.sm} {
    width: initial;
    margin-top: initial;
    margin-left: 0.66rem;
  }
`;

export default LeftBlock;
