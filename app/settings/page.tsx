'use client';
import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  dateFormatSelector,
  setDateFormat,
  setTimeFormat,
  timeFormatSelector,
} from '@/app/store/reducers/date';

import Settings from './Settings';

const SettingsContainer = () => {
  const timeFormat = useAppSelector(timeFormatSelector);
  const dateFormat = useAppSelector(dateFormatSelector);

  const dispatch = useAppDispatch();

  const handleChangeDateFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDateFormat(e.currentTarget.value.toString()));
  };

  const handleChangeTimeFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTimeFormat(e.currentTarget.value.toString()));
  };

  const dateFormatItems = [
    {
      id: crypto.randomUUID(),
      value: 'yyyy.mm.dd',
    },
    {
      id: crypto.randomUUID(),
      value: 'dd/mm/yyyy',
    },
  ];

  const timeFormatItems = [
    {
      id: crypto.randomUUID(),
      value: '24-hours',
    },
    {
      id: crypto.randomUUID(),
      value: '12-hour',
    },
  ];

  return (
    <Settings
      timeFormat={timeFormat}
      dateFormat={dateFormat}
      dateFormatItems={dateFormatItems}
      timeFormatItems={timeFormatItems}
      handleChangeDateFormat={handleChangeDateFormat}
      handleChangeTimeFormat={handleChangeTimeFormat}
    />
  );
};

export default SettingsContainer;
