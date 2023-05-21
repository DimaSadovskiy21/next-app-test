'use client';
import styled from "styled-components";

export const FooterWrapper = styled("footer")({
  display: "flex",
  gap: "133px",
  minHeight: "103px",
  padding: "16px 0",
  "@media screen and (max-width: 880px)": {
    gap: "68px",
  },
  "@media screen and (max-width: 720px)": {
    gap: "34px",
  }
});

export const Description = styled('p')({
  maxWidth: "600px",
  fontSize: "var(--font-small-size)",
})