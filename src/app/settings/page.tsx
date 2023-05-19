"use client";
import Image from "next/image";

import {
  FieldLayout,
  Form,
  IconLayout,
  Input,
  Select,
  Title,
} from "components";
import { account, format } from "assets/vectors";

import { FormWrapper, SettingsWrapper, Time } from "./styles";

const Settings = () => {
  const timeFormatItems = [
    {
      id: crypto.randomUUID(),
      value: "24-hours",
    },
    {
      id: crypto.randomUUID(),
      value: "12-hour",
    },
  ];

  const dateFormatItems = [
    {
      id: crypto.randomUUID(),
      value: "dd/mm/yyyy",
    },
    {
      id: crypto.randomUUID(),
      value: "yyyy.mm.dd",
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
            <Select id="timeformat" items={timeFormatItems} />
          </FieldLayout>
          <FieldLayout>
            <label htmlFor="dateformat">Date format</label>
            <Select id="dateformat" items={dateFormatItems} />
          </FieldLayout>
          <Time>02/05/2023 12:32</Time>
        </Form>
      </FormWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
