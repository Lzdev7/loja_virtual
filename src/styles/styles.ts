import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;

  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;