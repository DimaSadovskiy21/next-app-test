import { FC } from 'react';

import { arrow } from '@/app/assets/vectors';

import { ISelectProps } from './types';
import { Arrow, CustomSelect, SelectWrapper } from './styles';

const Select: FC<ISelectProps> = ({ items, ...resProps }) => (
  <SelectWrapper>
    <CustomSelect {...resProps}>
      {items.map((item) => (
        <option key={item.id} value={item.value}>
          {item.value}
        </option>
      ))}
    </CustomSelect>
    <Arrow src={arrow} alt="arrow" />
  </SelectWrapper>
);

export default Select;
