import { FC } from "react";

import { IFieldLayoutProps } from "./types";
import { FieldLayoutWrapper } from "./styles";

const FieldLayout: FC<IFieldLayoutProps> = ({ children }) => (
  <FieldLayoutWrapper>{children}</FieldLayoutWrapper>
);

export default FieldLayout;
