'use client';
import styled from "styled-components";

export const BalanceWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
  padding: "10px 21px 24px",
  backgroundColor: "var(--white)",
});

export const Items = styled("div")({
  width: "100%",
});

export const Item = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "7px 14px",
  backgroundColor: "var(--dark-gray)",
});

export const ReservedItem = styled(Item)({
  backgroundColor: "var(--reserved-color)",
})