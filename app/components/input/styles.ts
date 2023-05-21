'use client';
import styled from "styled-components";

export const CustomInput = styled("input")({
  minWidth: "439px",
  padding: '7px 12px',
  border: "none",
  borderRadius: "5px",
  fontFamily: "inherit",
  fontWeight: "inherit",
  fontSize: "inherit",
  outline: "none",
  "@media screen and (max-width: 1140px)": {
    minWidth: "300px",
  },
  "@media screen and (max-width: 1000px)": {
    minWidth: "250px",
  },
  "@media screen and (max-width: 495px)": {
    minWidth: "200px",
  }
});
