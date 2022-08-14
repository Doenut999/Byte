import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, *, *::before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 32px;
    font-family: "Raleway", monospace;
   }
  body {
    background-color: #1b1b1b;
    position: relative;
  }
`

export default GlobalStyle