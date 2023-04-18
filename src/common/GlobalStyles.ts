import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
  }
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    font-family: "Noto Sans", sans-serif;
  }
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export default GlobalStyles;
