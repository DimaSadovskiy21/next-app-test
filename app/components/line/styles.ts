'use client';
import styled from "styled-components";

export const CustomLine = styled("div")({
  maxWidth: "1366px",
  height: "3px",
  margin: "0 -141px",
  backgroundColor: "var(--orange)",
  "@media(max-width: 865px)": {
    margin: "0 -70px",
  },
  "@media(max-width: 670px)": {
    margin: "0 -35px",
  },
  "@media(max-width: 495px)": {
    margin: 0,
  }
});
