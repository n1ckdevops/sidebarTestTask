/** @format */

import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyle";

library.add(fas);

export default function App() {
  const [color, setColor] = useState("dark");
  const currentTheme = color === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Sidebar color={color} setColor={setColor} />
    </ThemeProvider>
  );
}
