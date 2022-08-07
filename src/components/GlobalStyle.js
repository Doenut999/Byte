import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, *, *::before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 32px;
    font-family: "Raleway", monospace;
   }
`

export default GlobalStyle