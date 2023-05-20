'use client';
import styled from "styled-components";

export const FooterWrapper = styled("footer")({
  display: "flex",
  gap: "133px",
  minHeight: "103px",
  padding: "16px 0",
  "@media(max-width: 865px)": {
    gap: "68px",
  },
  "@media(max-width: 670px)": {
    gap: "34px",
  }
});

export const Description = styled('p')({
  maxWidth: "600px",
  fontSize: "var(--font-small-size)",
})