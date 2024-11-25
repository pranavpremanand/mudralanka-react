import React from "react";
import "./Cart.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <div class="page-wrapper tailwind">
      <Header />
      <h1 className="text-3xl font-bold underline">Cart</h1>
      <Footer />
    </div>
  );
};

export default Cart;
