import React from "react";
import "./Cart.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div class="page-wrapper">
      <Header />
      <div class="main-container">
        <div class="inner-banner thm-black-bg text-center">
          <div class="container">
            <h2 class="inner-banner__title">My Cart</h2>
            <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <span>My Cart</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <h1>My Cart</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
