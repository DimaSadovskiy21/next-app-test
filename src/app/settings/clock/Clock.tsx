import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { dateFormatSelector, dateSelector, setDate, timeFormatSelector } from 'store/reducers/date';

import { ClockWrapper } from './styles';
import {
  generateEnDateFormat,
  generateEnTimeFormat,
  generateRuDateFormat,
  generateRuTimeFormat,
} from './utils';

const Clock = () => {
  const date = useAppSelector(dateSelector);
  const dateFormat = useAppSelector(dateFormatSelector);
  const timeFormat = useAppSelector(timeFormatSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      dispatch(setDate(date));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  const ruDateFormat = generateRuDateFormat(date);
  const enDateFormat = generateEnDateFormat(date);
  const ruTimeFormat = generateRuTimeFormat(date);
  const enTimeFormat = generateEnTimeFormat(date);

  return (
    <ClockWrapper>
      <p>
      {dateFormat === 'yyyy.mm.dd' ? ruDateFormat : enDateFormat}
      </p>
      <p>
      {timeFormat === '24-hours' ? ruTimeFormat : enTimeFormat}
      </p>
    </ClockWrapper>
  );
};

export default Clock;
