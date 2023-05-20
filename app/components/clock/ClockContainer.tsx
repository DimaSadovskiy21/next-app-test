import { useState, useEffect } from 'react';

import { useAppSelector } from '@/hooks';
import { dateFormatSelector, timeFormatSelector } from '@/store/reducers/date';

import {
  generateEnDateFormat,
  generateEnTimeFormat,
  generateRuDateFormat,
  generateRuTimeFormat,
} from './utils';
import Clock from './Clock';

const ClockContainer = () => {
  const [date, setDate] = useState(new Date());

  const dateFormat = useAppSelector(dateFormatSelector);
  const timeFormat = useAppSelector(timeFormatSelector);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDate(date);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const ruDateFormat = generateRuDateFormat(date);
  const enDateFormat = generateEnDateFormat(date);
  const ruTimeFormat = generateRuTimeFormat(date);
  const enTimeFormat = generateEnTimeFormat(date);

  return (
    <Clock
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      ruDateFormat={ruDateFormat}
      enDateFormat={enDateFormat}
      ruTimeFormat={ruTimeFormat}
      enTimeFormat={enTimeFormat}
    />
  );
};

export default ClockContainer;
