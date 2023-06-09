'use client';
import styled from "styled-components";

export const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  width: "100%",
  padding: "14px 24px 10px",
  backgroundColor: "var(--dark-gray)",
  "@media screen and (max-width: 495px)": {
    padding: "14px 10px 10px",
  }
});
