import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/GlobalStyle';

import Layout from 'src/components/layout/Layout';

import { getLoggedUserId } from '../utils/getLoggedUserId';

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

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

export default MyApp;
