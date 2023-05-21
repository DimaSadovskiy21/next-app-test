'use client';
import styled from "styled-components";

export const FieldLayoutWrapper = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center',
    gap: "40px",
    padding: "7px",
    borderRadius: "5px",
    backgroundColor: "var(--gray)",
    "@media screen and (max-width: 880px)": {
        gap: "20px",
      },
});
