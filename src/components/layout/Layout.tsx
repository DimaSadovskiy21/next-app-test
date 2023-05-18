import { FC } from "react";

import { ILayoutProps } from "./types";
import { LayoutWrapper, Main } from "./styles";
import { Footer, Header } from "./components";



const Layout: FC<ILayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
