import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Underdog&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #bbbbbb;
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

  body {
    background: #120818;
    font-family: 'Rubik', sans-serif;
  }
`