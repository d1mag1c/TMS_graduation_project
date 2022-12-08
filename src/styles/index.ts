import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

`