import { createGlobalStyle } from 'styled-components';

import Background from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    background: #d3d3d3 url(${Background}) no-repeat bottom;
    background-size: 718px 545px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Advent Pro, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
