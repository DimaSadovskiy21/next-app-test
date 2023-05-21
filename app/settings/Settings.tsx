'use client';
import { FC } from 'react';
import Image from 'next/image';

import { FieldLayout, Form, IconLayout, Input, Select, Title, Clock } from '@/app/components';

import { account, format } from '@/app/assets/vectors';

import { ISettingProps } from './types';
import { FormWrapper, SettingsWrapper } from './styles';

const Settings: FC<ISettingProps> = ({
  timeFormat,
  dateFormat,
  dateFormatItems,
  timeFormatItems,
  handleChangeDateFormat,
  handleChangeTimeFormat,
}) => (
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

export default Settings;
