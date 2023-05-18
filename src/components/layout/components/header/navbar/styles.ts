import Link from "next/link";
import styled from "styled-components";

import { ILinkStyledProps } from "./types";

export const NavbarWrapper = styled("div")({
  display: "flex",
  gap: "25px",
});

export const LinkStyled = styled(Link)<ILinkStyledProps>(
  ({ $isPathnameEqual }) => ({
    fontWeight: "bold",
    fontSize: "var(--font-medium-size)",
    color: "var(--orange)",
    borderBottom: $isPathnameEqual ? "2px solid var(--orange)" : "",
  })
);
