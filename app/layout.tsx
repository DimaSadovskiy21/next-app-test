'use client';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';

import { setupStore } from '@/app/store';
import { Header, Footer, Line } from '@/app/components';

import { IRootLayoutProps } from './types';
import { GlobalStyle, Main, Wrapper } from './globalStyles';
import Head from './head';
import StyledComponentsRegistry from './lib/registry';

const inter = Inter({ subsets: ['latin'], weight: '400' });

const RootLayout: FC<IRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head />
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <Wrapper>
          <Header />
          <Line />
          <Provider store={setupStore()}>
            <Main>{children}</Main>
          </Provider>
          <Line />
          <Footer />
        </Wrapper>
        <GlobalStyle />
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
