import { Global, css } from '@emotion/react';

import { Resets } from 'styles/global/Resets';
import { FontFace } from 'styles/global/FontFace';
import { media } from 'styles/media';

export const globalCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    min-height: 100vh;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    ${media.xs} {
      font-size: 14.5px;
    }
    ${media.sm} {
      font-size: 15px;
    }
    ${media.md} {
      font-size: 15px;
    }
    ${media.lg} {
      font-size: 15.5px;
    }
    ${media.xl} {
      font-size: 16px;
    }
    ${media.xxl} {
      font-size: 16px;
    }
  }

  body {
    // TODO: 폰트 렌더링 최적화하기
    font-family: 'Noto Sans KR', 'Roboto', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
  }
`;

export const GlobalStyles = () => (
  <>
    <Global styles={Resets} />
    <Global styles={FontFace} />
    <Global styles={globalCSS} />
  </>
);
