import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F5F5F5;
    color: #373737;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #2e3a59;
  }

  html {
    @media (max-width: 87.5rem) {
      font-size: 93.75%;
    }
    @media (max-width: 45rem) {
      font-size: 87.5%;
    }
    @media (max-width: 2.8125rem) {
      font-size: 83.5%;
    }
  }

  button {
    cursor: pointer;
  }

`;
