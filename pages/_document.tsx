import { GoogleAnalytics } from '@next/third-parties/google';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="/images/logo.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG || ''} />
      </body>
    </Html>
  );
}
