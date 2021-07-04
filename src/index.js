import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import App from "./App";
import Netnet from "./Articles/Netnet/Netnet";
import UW1sig from "./Articles/UW1Sig/UW1sig";
import UW2winrates from "./Articles/UW2WinRates/UW2winrates";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App path="/" />
        <Netnet path="netnet" />
        <UW1sig path="uw1sig" />
        <UW2winrates path="uw2winrates" />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
