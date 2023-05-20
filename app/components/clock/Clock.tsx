import { FC } from 'react';

import { IClockProps } from './types';
import { ClockWrapper } from './styles';

const Clock: FC<IClockProps> = ({
  dateFormat,
  timeFormat,
  ruDateFormat,
  enDateFormat,
  ruTimeFormat,
  enTimeFormat,
}) => {
  return (
    <ClockWrapper>
      <p>{dateFormat === 'yyyy.mm.dd' ? ruDateFormat : enDateFormat}</p>
      <p>{timeFormat === '24-hours' ? ruTimeFormat : enTimeFormat}</p>
    </ClockWrapper>
  );
};

export default Clock;
