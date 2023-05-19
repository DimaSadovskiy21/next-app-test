import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-default-size);
  color: var(--black);
  background-color: var(--white);
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --font-small-size: 12px;
  --font-medium-size: 14px;
  --font-default-size: 16px;
  --font-large-size: 36px;
  --white: #FFFFFF;
  --light-gray: #FAFAFA;
  --gray: #EBEBEB;
  --dark-gray: #D9D9D9; 
  --orange: #FF9F00;
  --black: #000000;
  --reserved-color: #E4E4E4;
}
`;

export const Wrapper = styled("div")({
  width: "1366px",
  padding: "0 141px",
  fontSize: "var(--font-default-size)",
  color: "var(--black)",
});

export const Main = styled("main")({
  minHeight: "730px",
  padding: "33px 0",
});
