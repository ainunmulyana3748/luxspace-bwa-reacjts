import React from "react";
import Header from "../../parts/Header";
import Sitemap from "../../parts/Sitemap";
import Footer from "../../parts/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ShippingDetails from "../../parts/Cart/ShippingDetails";
import ShoppingCart from "../../parts/Cart/ShoppingCart";

const Cart = () => {
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
            url: "/cart",
            name: "Shopping Cart",
          },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
};

export default Cart;
