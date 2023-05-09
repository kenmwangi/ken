import React from "react";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Blogs />
      </Container>
    </div>
  );
};

export default Home;
