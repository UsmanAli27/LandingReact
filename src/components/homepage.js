import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";

export default function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Pricing />
    </React.Fragment>
  );
}
