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
    color: ${({props}) => props.color};
    &:hover{
      color:${({props}) => props.colorHover}
    }
  }

  body {
    transition: 0.5s;
    background: ${({props}) => props.background}
    font-family: 'Rubik', sans-serif;
    
  }
  
  svg{
    fill:${({props}) => props.color};
    &:hover {
      fill:${({props}) => props.colorHover}
    }
  }
`