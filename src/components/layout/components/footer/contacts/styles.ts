import styled from "styled-components";

export const ContactsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});

export const Title = styled("p")({
  fontSize: "var(--font-small-size)",
});

export const Links = styled("div")({
  display: "flex",
  gap: "18px",
  alignItems: "center",
});
