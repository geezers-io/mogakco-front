import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import { LOGO_URL } from 'common';

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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
