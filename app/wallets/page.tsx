"use client";
import Image from "next/image";

import {
  Balance,
  FieldLayout,
  Form,
  IconLayout,
  Input,
  Title,
} from "@/components";
import { wallet } from "@/assets/vectors";

import { FormWrapper, WallestWrapper } from "./styles";

const Wallets = () => (
  <WallestWrapper>
    <Title>Wallets</Title>

    <FormWrapper>
      <IconLayout title="Wallet KD27801">
        <Image src={wallet} alt="Wallet KD27801" />
      </IconLayout>
      <Form>
        <Balance />
        <FieldLayout>
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" />
        </FieldLayout>
        <FieldLayout>
          <label htmlFor="phone">Phone</label>
          <Input id="phone" type="tel" />
        </FieldLayout>
      </Form>
    </FormWrapper>
  </WallestWrapper>
);

export default Wallets;
