import React from 'react';
import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/GlobalStyle';

import Layout from 'src/components/layout/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
