import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import FeaturedPost from "./Components/FeaturedPost";
import Netnet from "./Articles/Netnet/Netnet";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <FeaturedPost />
          </Route>
          <Route path="/netnet">
            <Netnet />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
