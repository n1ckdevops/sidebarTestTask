/** @format */

import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyle";

library.add(fas);

export default function App() {
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Sidebar themeName={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}
