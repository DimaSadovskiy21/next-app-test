'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

import { FieldLayout, Form, IconLayout, Input, Select, Title } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { account, format } from 'assets/vectors';
import {
  dateFormatSelector,
  setDateFormat,
  setTimeFormat,
  timeFormatSelector,
} from 'store/reducers/date';

import { FormWrapper, SettingsWrapper } from './styles';
import { Clock } from './clock';

const Settings = () => {
  const timeFormat = useAppSelector(timeFormatSelector);
  const dateFormat = useAppSelector(dateFormatSelector);

  const dispatch = useAppDispatch();

  const handleChangeDateFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDateFormat(e.currentTarget.value));
  };

  const handleChangeTimeFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTimeFormat(e.currentTarget.value));
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
    <SettingsWrapper>
      <Title>Settings</Title>

      <FormWrapper>
        <IconLayout title="Account">
          <Image src={account} alt="account" />
        </IconLayout>
        <Form>
          <FieldLayout>
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" />
          </FieldLayout>
          <FieldLayout>
            <label htmlFor="firstName">First name</label>
            <Input id="firstName" type="text" />
          </FieldLayout>
          <FieldLayout>
            <label htmlFor="lastName">Last name</label>
            <Input id="lastName" type="text" />
          </FieldLayout>
        </Form>
      </FormWrapper>

      <FormWrapper>
        <IconLayout title="Format">
          <Image src={format} alt="account" />
        </IconLayout>
        <Form>
          <FieldLayout>
            <label htmlFor="timeformat">Time format</label>
            <Select
              id="timeformat"
              items={timeFormatItems}
              value={timeFormat}
              onChange={handleChangeTimeFormat}
            />
          </FieldLayout>
          <FieldLayout>
            <label htmlFor="dateformat">Date format</label>
            <Select
              id="dateformat"
              items={dateFormatItems}
              value={dateFormat}
              onChange={handleChangeDateFormat}
            />
          </FieldLayout>
          <Clock />
        </Form>
      </FormWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
