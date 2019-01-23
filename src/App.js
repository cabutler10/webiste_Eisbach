import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import { Router } from "@reach/router";
class App extends Component {
  render() {
    return (
      <Router>
        <Homepage default path="/" />
        <Legal path="/legal" />
        <Privacy path="/privacy" />
      </Router>
    );
  }
}

export default App;
