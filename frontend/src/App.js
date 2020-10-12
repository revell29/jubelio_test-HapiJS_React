import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Routes from "./routes";
require("dotenv").config();

function App() {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Routes />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
