import React from "react";
import Header from "../../parts/Header";
import PageErrorMessage from "../../parts/PageErrorMessage";
import Sitemap from "../../parts/Sitemap";
import Footer from "../../parts/Footer";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
};

export default PageNotFound;
