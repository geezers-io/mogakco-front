import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { LOGO_URL } from 'common';

export const TITLE = '모여서 각자 코딩 - Mogakco';
export const DESCRIPTION = 'Free online video chat for developers';
export const LOCALE = 'ko_KR';

function MyApp({ Component, pageProps }: AppProps) {
  const href = typeof window === 'undefined' ? '' : location.href;

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:site_name" content="Mogakco" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={href} />
        <meta property="og:locale" content={LOCALE} />
        <meta property="og:image" content={LOGO_URL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mogakco" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image:src" content={LOGO_URL} />
      </Head>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
