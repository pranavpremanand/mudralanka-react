import React from "react";
import Header from "../components/Header";
import WhatWeCanDo from "../components/WhatWeCanDo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { services } from "../constant";

const OurServices = () => {
  return (
    <div class="page-wrapper">
      <Header />
      <div class="inner-banner thm-black-bg text-center">
        <div class="container">
          <h2 class="inner-banner__title">Our Services</h2>
          <ul class="thm-breadcrumb">
            <li class="thm-breadcrumb__item">
              <a href="#">Home</a>
            </li>
            <li class="thm-breadcrumb__item">
              <span>Our Services</span>
            </li>
          </ul>
        </div>
      </div>
      <section class="service-four sec-pad sec-pad-content-margin-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img src={services[0].image} alt="Pic" />
                </div>
                <h3 class="service-four__title">
                  <Link to={services[0].path}>{services[0].title}</Link>
                </h3>
                <p class="service-four__text">
                  We offer high-quality sticker printing with vibrant colors and
                  durable materials, perfect for personal or professional use.
                </p>
                <Link to={services[0].path} class="service-four__link">
                  Read More
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img src={services[1].image} alt="Pic" />
                </div>
                <h3 class="service-four__title">
                  <Link to={services[1].path}>{services[1].title}</Link>
                </h3>
                <p class="service-four__text">
                  Create high-quality PVC ID cards with customizable templates,
                  vibrant colors, and a professional finish, ideal for
                  businesses, schools, and events.
                </p>
                <Link to={services[1].path} class="service-four__link">
                  Read More
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img src={services[2].image} alt="Pic" />
                </div>
                <h3 class="service-four__title">
                  <Link to={services[2].path}>{services[2].title}</Link>
                </h3>
                <p class="service-four__text">
                  Personalize your mobile cases with high-quality printing,
                  offering vibrant designs and durable finishes to protect and
                  style your device.
                </p>
                <Link to={services[2].path} class="service-four__link">
                  Read More
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img src={services[3].image} alt="Pic" />
                </div>
                <h3 class="service-four__title">
                  <Link to={services[3].path}>{services[3].title}</Link>
                </h3>
                <p class="service-four__text">
                  Get professionally designed visiting cards with premium
                  quality printing, perfect for creating a lasting impression in
                  any business setting.
                </p>
                <Link to={services[3].path} class="service-four__link">
                  Read More
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img src={services[4].image} alt="Pic" />
                </div>
                <h3 class="service-four__title">
                  <Link to={services[4].path}>{services[4].title}</Link>
                </h3>
                <p class="service-four__text">
                  We provide customized billbooks with high-quality printing,
                  tailored to meet your business needs for professional
                  invoicing and record-keeping.
                </p>
                <Link to={services[4].path} class="service-four__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cta-four thm-primary-bg sec-pad sec-pad-content-margin-30">
        <div class="container">
          <h3 class="cta-four__title content-margin-30">
            Looking for Design with printing?
          </h3>
          <Link to="/contact" class="content-margin-30 thm-btn cta-four__btn">
            Learn More
          </Link>
        </div>
      </section>
      <WhatWeCanDo />
      <Footer />
    </div>
  );
};

export default OurServices;
