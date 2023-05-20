import { FC } from "react";

import { IInputProps } from "./types";
import { CustomInput } from "./styles";

const Input: FC<IInputProps> = (props) => <CustomInput {...props} />;

export default Input;
