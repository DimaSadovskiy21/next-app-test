import { FC } from "react";

import { IFormProps } from "./types";
import { FormWrapper } from "./styles";

const Form: FC<IFormProps> = ({ children, ...restProps }) => (
  <FormWrapper {...restProps}>{children}</FormWrapper>
);

export default Form;
