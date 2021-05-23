import React from "react";
import { Container } from "@material-ui/core";

import Header from "./Components/Header";
import FeaturedPost from "./Components/FeaturedPost";
import Posts from "./Components/Posts";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <FeaturedPost />
      <Posts />
    </Container>
  );
}

export default App;
