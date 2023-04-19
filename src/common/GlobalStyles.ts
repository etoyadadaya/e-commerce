import {createGlobalStyle} from "styled-components";

import IncompleetaWoff from "../../public/fonts/IncompleetaLight.woff";
import IncompleetaWoff2 from "../../public/fonts/IncompleetaLight.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Incompleeta";
    src: local('Incompleeta Font'), local('Incompleeta'),
    url(${IncompleetaWoff2}) format('woff2'),
    url(${IncompleetaWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
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
