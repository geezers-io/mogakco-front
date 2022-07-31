import Document, { Html, Head, Main, NextScript } from 'next/document';
import { LOGO_URL } from 'common';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from 'styles';

export default class CustomDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="ko-KR">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/vnd.microsoft.icon" href={LOGO_URL} />
          <link rel="icon" type="image/x-icon" href={LOGO_URL} />
          <link rel="icon" href={LOGO_URL} />
          <link rel="icon" type="image/png" sizes="16x16" href={LOGO_URL} />
          <link rel="icon" type="image/png" sizes="32x32" href={LOGO_URL} />
          <link rel="icon" type="image/png" sizes="192x192" href={LOGO_URL} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
