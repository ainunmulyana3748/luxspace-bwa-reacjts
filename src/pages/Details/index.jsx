import React from "react";
import Header from "../../parts/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Sitemap from "../../parts/Sitemap";
import Footer from "../../parts/Footer";
import ProductDetails from "../../parts/Details/ProductDetails";
import Suggestion from "../../parts/Details/Suggestion";

const Details = () => {
  return (
    <>
      <Header theme="black" />

      <Breadcrumb
        list={[
          {
            url: "/",
            name: "Home",
          },
          {
            url: "/category/123123",
            name: "Office Room",
          },
          {
            url: "/category/123123/product/321",
            name: "Details",
          },
        ]}
      />

      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
