/** @format */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  // dark
  --color-sidebar-background-dark-default: #000000ff;
  --color-sidebar-background-dark-hover: #1b1b1cff;
  --color-sidebar-background-dark-active: #3b3d42ff;
  --color-text-dark-default: #f0f2ff;
  --color-text-dark-hover: #f0f2ff;
  --color-text-dark-active: #f0f2ff;
  --color-text-logo-dark-default: #3b82f6;
  --color-button-background-dark-default: #262b2fff;
  --color-button-background-dark-active: #616e7aff;
  --color-outer-background-dark-default: #414145ff;

  // light
  --color-sidebar-background-light-default: #fff;
  --color-sidebar-background-light-hover: #e1e5fcff;
  --color-sidebar-background-light-active: #abb5f2ff;
  --color-text-light-default: #040404cc;
  --color-text-light-hover: #091b31;
  --color-text-light-active: #0000b5;
  --color-text-logo-light-default: #0000b5;
  --color-button-background-light-default: #c7cdf5ff;
  --color-button-background-light-active: #c7cdf5ff;
  --color-outer-background-light-default: #edededff;
}
  
  html {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.outerBg};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
}
`;
