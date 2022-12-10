import {createGlobalStyle} from "styled-components";
import {payloadType} from "../store/themeReducer/type";

export const GlobalStyle = createGlobalStyle<{ props: payloadType }>`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({props}) => props.color}
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
    background: ${({props}) => props.background}
    font-family: 'Rubik', sans-serif;
  }
`