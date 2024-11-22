import React from "react";
import Header from "../components/Header";
import WhatWeCanDo from "../components/WhatWeCanDo";
import Footer from "../components/Footer";

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
                  <img
                    src="images/icons/wall-sticker-1-1.png"
                    alt="Awesome Image"
                  />
                </div>
                <h3 class="service-four__title">
                  <a href="single-service.html">Sticker Printing</a>
                </h3>
                <p class="service-four__text">
                  Lorem ipsum is simply free text dolor sit amett adipiscing
                  elit anned printer simp is took of type and scrambled it to
                  make.
                </p>
                <a href="single-service.html" class="service-four__link">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img src="images/icons/id-card-1-1.png" alt="Awesome Image" />
                </div>
                <h3 class="service-four__title">
                  <a href="single-service.html">PVC ID Card</a>
                </h3>
                <p class="service-four__text">
                  Lorem ipsum is simply free text dolor sit amett adipiscing
                  elit anned printer simp is took of type and scrambled it to
                  make.
                </p>
                <a href="single-service.html" class="service-four__link">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img
                    src="images/icons/mobile-case-1-1.png"
                    alt="Awesome Image"
                  />
                </div>
                <h3 class="service-four__title">
                  <a href="single-service.html">Mobile Case Printing</a>
                </h3>
                <p class="service-four__text">
                  Lorem ipsum is simply free text dolor sit amett adipiscing
                  elit anned printer simp is took of type and scrambled it to
                  make.
                </p>
                <a href="single-service.html" class="service-four__link">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img
                    src="images/icons/visiting-card-1-1.png"
                    alt="Awesome Image"
                  />
                </div>
                <h3 class="service-four__title">
                  <a href="single-service.html">Visiting Card</a>
                </h3>
                <p class="service-four__text">
                  Lorem ipsum is simply free text dolor sit amett adipiscing
                  elit anned printer simp is took of type and scrambled it to
                  make.
                </p>
                <a href="single-service.html" class="service-four__link">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="service-four__single content-margin-60">
                <div class="service-four__icon">
                  <img
                    src="images/icons/accounting-book-1-1.png"
                    alt="Awesome Image"
                  />
                </div>
                <h3 class="service-four__title">
                  <a href="single-service.html">Billbook</a>
                </h3>
                <p class="service-four__text">
                  Lorem ipsum is simply free text dolor sit amett adipiscing
                  elit anned printer simp is took of type and scrambled it to
                  make.
                </p>
                <a href="single-service.html" class="service-four__link">
                  Read More
                </a>
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
          <a
            href="service.html"
            class="content-margin-30 thm-btn cta-four__btn"
          >
            Learn More
          </a>
        </div>
      </section>
      <WhatWeCanDo />
      <Footer />
    </div>
  );
};

export default OurServices;
