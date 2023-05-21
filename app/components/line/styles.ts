'use client';
import styled from "styled-components";

export const CustomLine = styled("div")({
  maxWidth: "1366px",
  height: "3px",
  margin: "0 -141px",
  backgroundColor: "var(--orange)",
  "@media screen and (max-width: 880px)": {
    margin: "0 -70px",
  },
  "@media screen and (max-width: 720px)": {
    margin: "0 -35px",
  },
  "@media screen and (max-width: 495px)": {
    margin: 0,
  }
});
