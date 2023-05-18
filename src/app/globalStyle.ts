import { createGlobalStyle } from "styled-components";

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
  --orange: #FF9F00;
  --black: #000000;
}
`;
