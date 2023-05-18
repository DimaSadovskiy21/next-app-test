'use client';
import { FC } from 'react';
import { Inter } from 'next/font/google';

import { Header, Footer } from 'components';

import { IRootLayoutProps } from './types';
import { GlobalStyle, Main, Wrapper } from './globalStyles';
import Head from './head';

const inter = Inter({ subsets: ['latin'], weight: '400' });

const RootLayout: FC<IRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head />
    <body className={inter.className}>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <GlobalStyle />
      </Wrapper>
    </body>
  </html>
);

export default RootLayout;
