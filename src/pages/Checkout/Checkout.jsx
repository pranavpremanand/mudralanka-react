import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Checkout = () => {
  return (
    <div class="page-wrapper tailwind">
      <Header />
      <div className="container">
        <div className="py-4 d-flex">
        <h3 className="fs-2">Checkout</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
