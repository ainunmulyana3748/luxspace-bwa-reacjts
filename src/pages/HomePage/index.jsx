import React from "react";
import Header from "../../parts/Header";
import Hero from "../../parts/Hero";
import BrowseRoom from "../../parts/HomePage/BrowseRoom";
import JustArrived from "../../parts/HomePage/JustArrived";
import Clients from "../../parts/Clients";
import Sitemap from "../../parts/Sitemap";
import Footer from "../../parts/Footer";
import UseScrollAnchor from "../../helpers/hook/UseScrollAnchor";
import UseModalDOM from "../../helpers/hook/UseModalDOM";

const HomePage = () => {
  UseScrollAnchor();
  UseModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap border="home" />
      <Footer />
    </>
  );
};

export default HomePage;
