'use client';
import styled from "styled-components";

export const IconLayoutWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  maxWidth: "221px",
  padding: "28px 52px 0 71px",
  backgroundColor: "var(--light-gray)",
});

export const BackgroundIcon = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "98px",
  height: "98px",
  borderRadius: "50%",
  backgroundColor: "var(--dark-gray)",
});

export const Title = styled("p")({
  whiteSpace: "nowrap",
})

