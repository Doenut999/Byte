import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, body, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 32px;
    font-family: 'Raleway', monospace;
  }
`

export default GlobalStyle