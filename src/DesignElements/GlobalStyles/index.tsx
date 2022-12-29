import { createGlobalStyle } from "styled-components";
import { ThemeFonts } from "../../types";

const ResetStyle = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }

  a{
    text-decoration: none;
  }

`;

const GlobalStyle = createGlobalStyle`

  ${ResetStyle}

  body {
    background-color:  ${(props) => props.theme.elements.primary.background};
    /* font Global */
    font-family: ${ThemeFonts.Hanken}, sans-serif;
    h1 {
      font-size: 42px;
      font-weight: 900;
    };
    h2 {
      font-size: 35px;
      font-weight: 800;
    }
    h3 {
      font-size: 25px;
      font-weight: 700;
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
    }
    h5 {
      font-size: 15px;
      font-weight: 400;
    }
  }

`;

export default GlobalStyle;
