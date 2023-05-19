import { FC } from "react";

import { IIconLayoutProps } from "./types";
import { BackgroundIcon, IconLayoutWrapper, Title } from "./styles";

const IconLayout: FC<IIconLayoutProps> = ({ title, children }) => (
  <IconLayoutWrapper>
    <BackgroundIcon>{children}</BackgroundIcon>
    <Title>{title}</Title>
  </IconLayoutWrapper>
);

export default IconLayout;
