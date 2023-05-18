"use client";
import { FC } from "react";
import { Inter } from "next/font/google";

import { Layout } from "components";

import { IRootLayoutProps } from "./types";
import Head from "./head";
import { GlobalStyle } from "./globalStyle";


const inter = Inter({ subsets: ["latin"], weight: "400" });

const RootLayout: FC<IRootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head />
    <body className={inter.className}>
      <Layout>{children}</Layout>
      <GlobalStyle />
    </body>
  </html>
);

export default RootLayout;
