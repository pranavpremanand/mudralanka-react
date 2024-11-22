import React from "react";
import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const WhatWeCanDo = () => {
  return (
    <section className="service-one sec-pad-top">
      <div className="container">
        <div className="block-title text-center">
          <p className="block-title__tag-line ">Our Features</p>
          <h2 className="block-title__title">What We Can Do</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__image">
                <img src="images/service/service-1-1.jpg" alt="Sticker Printing" />
              </div>
              <div className="service-one__text-block">
                <h3 className="service-one__title">
                  <a href="single-service.html">Sticker Printing</a>
                </h3>

                <p className="service-one__text">
                  Create eye-catching, custom stickers with vibrant colors and
                  durable materials. Perfect for branding, events, and personal
                  use!
                </p>

                <Link to="#" className="service-one__link">
                  <PiCaretRightBold className="text-white" size={19} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__image">
                <img src="images/service/service-1-2.jpg" alt="Visiting Card" />
              </div>
              <div className="service-one__text-block">
                <h3 className="service-one__title">
                  <a href="single-service.html">Visiting Card</a>
                </h3>

                <p className="service-one__text">
                  Design unique and premium visiting cards to showcase your
                  identity and leave a lasting impression on everyone.
                </p>

                <Link to="#" className="service-one__link">
                  <PiCaretRightBold className="text-white" size={19} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__image">
                <img src="images/service/service-1-3.jpg" alt="PVC ID Card" />
              </div>
              <div className="service-one__text-block">
                <h3 className="service-one__title">
                  <a href="single-service.html">PVC ID Card</a>
                </h3>

                <p className="service-one__text">
                  Durable, professional PVC ID cards printed with high-quality
                  designs. Ideal for businesses, schools, and events. Secure and
                  customizable!
                </p>

                <Link to="#" className="service-one__link">
                  <PiCaretRightBold className="text-white" size={19} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDo;
