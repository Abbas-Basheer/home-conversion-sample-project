import React from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import Faq from "../elements/Faq";
import Pricing from "../elements/Pricing";
import Team from "../elements/Team";
import Banner from "../elements/Banner";
import Features from "../elements/Features";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <Features />
        <Team />
        <Pricing />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default Home;
