import React from "react";
import { Container } from "@material-ui/core";

import Header from "./Components/Header";
import FeaturedPost from "./Components/FeaturedPost";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <FeaturedPost />
    </Container>
  );
}

export default App;
