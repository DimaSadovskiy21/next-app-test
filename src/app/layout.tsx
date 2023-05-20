'use client';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';

import { setupStore } from 'store';
import { Header, Footer, Line } from 'components';

import { IRootLayoutProps } from './types';
import { GlobalStyle, Main, Wrapper } from './globalStyles';
import Head from './head';


const inter = Inter({ subsets: ['latin'], weight: '400' });

const store = setupStore();

const RootLayout: FC<IRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head />
    <body className={inter.className}>
      <Provider store={store}>
        <Wrapper>
          <Header />
          <Line />
          <Main>{children}</Main>
          <Line />
          <Footer />
          <GlobalStyle />
        </Wrapper>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
