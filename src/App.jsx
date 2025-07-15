/** @format */

import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

library.add(fas);

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Sidebar color="dark" />
      </ThemeProvider>
    );
  }
}
