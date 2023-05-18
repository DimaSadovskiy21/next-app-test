import { FC } from 'react';

import { ITitleProps } from './types';
import { CustomTitle } from './styles';

const Title: FC<ITitleProps> = ({ children }) => <CustomTitle>{children}</CustomTitle>;

export default Title;
