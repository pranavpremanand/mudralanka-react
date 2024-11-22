import React from "react";
import "./StickerPrinting.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StickerPrinting = () => {
  return (
    <div class="page-wrapper">
      <Header />
      <div class="main-container">
        <div class="inner-banner thm-black-bg text-center">
          <div class="container">
            <h2 class="inner-banner__title">Sticker Printing</h2>
            <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <Link to="/services">Services</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <span>Sticker Printing</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="section-oneContainer">
          <div class="images-container">
            <div class="image-gallery">
              <div class="main-image mb-3">
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Main Sticker"
                  class="img-fluid rounded"
                />
              </div>
              <div class="image-list d-flex justify-content-between">
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Thumb 1"
                  class="img-thumbnail img-clickable"
                />
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Thumb 2"
                  class="img-thumbnail img-clickable"
                />
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Thumb 3"
                  class="img-thumbnail img-clickable"
                />
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Thumb 4"
                  class="img-thumbnail img-clickable"
                />
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Thumb 5"
                  class="img-thumbnail img-clickable"
                />
                <img
                  src="images/service-stickerPrinting/service-stickerPrintingimg1.png"
                  alt="Thumb 6"
                  class="img-thumbnail img-clickable"
                />
              </div>
            </div>
          </div>

          <div class="details-container">
            <h2 class="main-heading">UV Ink Transfer Stickers</h2>
            <p class="fw-normal fs-5 mb-4">
              Unlock limitless creativity with our cutting-edge UV Ink Transfer
              Stickers.
            </p>
            <h3 class="fw-semibold fs-6">Cash on Delivery available</h3>
            <ul class="fw-medium fs-6 mb-3">
              <li>
                Designed for hassle-free, long-lasting application, our stickers
                adhere effortlessly to any flat or cylindrical surface.
              </li>
              <li>Impressive raised effect, with vibrant colours.</li>
              <li>Transfer your logos, photos, and text in 3 simple steps.</li>
              <li>
                For Steps to transfer Ink on your product, refer to guidelines
                in the overview section.
              </li>
              <li>
                For optimal results, upload files without a white or transparent
                background, or utilise the 'Remove Background' feature in the
                design studio.
              </li>
            </ul>
            {/* <p class="fw-medium fs-6">
              Price below is MRP (inclusive of all taxes)
            </p> */}

            <div class="dropdown-section mb-4">
              <div class="dropdown-Heading">
                <h4 class="d-inline fw-bold fs-5">Size</h4>
                {/* <span class="fw-bold text-decoration-underline ms-3">
                  View Specs & Templates
                </span>
                <span class="fw-bold text-decoration-underline ms-2">
                  to create your print-ready file.
                </span> */}
              </div>
              <select class="options-container">
                <option selected>Select Size</option>
                <option>48 x 34</option>
                <option>72 x 34</option>
                <option>96 x 34</option>
                <option>120 x 34</option>
              </select>
            </div>

            <h4 class="fw-bold fs-5">Quality</h4>
            <div class="list-group">
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>24</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">₹940.00</p>
                    <small class="quality-list-small">₹39.17 / unit</small>
                  </div>
                </div>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>48</span>
                  <span class="quality-list-chip">Recommended</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">₹1870.00</p>
                    <small class="quality-list-small">₹38.96 / unit</small>
                  </div>
                </div>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>72</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">₹2740.00</p>
                    <small class="quality-list-small">₹38.06 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">2% savings</small>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>96</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">₹3650.00</p>
                    <small class="quality-list-small">₹38.03 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">2% savings</small>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>120</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">₹4450.00</p>
                    <small class="quality-list-small">₹37.09 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">2% savings</small>
              </div>
            </div>

            {/* <p class="starting-price">
              24 starting at ₹940.00
              <span class="">See more quantities</span>
              <span class="">FREE Shipping</span>
            </p> */}

            <h4 class="fw-bold fs-5">Upload Design</h4>
            <button>
              Have a design? Upload and edit it
              <img
                src="images/service-stickerPrinting/svg/UploadIcon.svg"
                alt="upload"
              />
            </button>
            <p class="satisfaction">
              <img
                src="images/service-stickerPrinting/svg/guaranteedsatisfaction.svg
            "
                alt="upload"
              />
              100% satisfaction guaranteed
            </p>
          </div>
        </div>
        <div class="section-twoContainer">
          <div class="tab">
            <h3 class="">overview</h3>
          </div>
          <div class="details-container">
            <div class="section-two-details">
              <div>
                <h3>
                  Make Your Brand Stand Out with Custom Ink Transfer Stickers.
                </h3>
                <p>
                  Looking for a versatile and eye-catching way to showcase your
                  brand? Look no further than our UV Ink Transfer Stickers.
                  These UV DTF stickers are perfect for both flat and
                  cylindrical surfaces, indoors or outdoors, and offer an
                  impressive, raised effect with vibrant colours that will make
                  your logo, photos, and text pop. With just three simple steps,
                  you can transfer your design onto any hard surface, giving
                  your products a professional and personalised touch. Don't
                  settle for ordinary stickers – upgrade to UV Ink Transfer
                  Stickers and make a lasting impression.
                </p>
                <h5>Steps to Transfer Ink on Your Product</h5>
                <ul>
                  <li>Step 1: Peel off the white backing paper.</li>
                  <li>
                    Step 2: Hold the transparent masking tape with your fingers
                    and place it on the desired location.
                  </li>
                  <li>
                    Step 3: Gently rub the surface from all sides for 30-40
                    seconds.
                  </li>
                  <li>
                    Step 4: Peel off the transparent plastic film slowly leaving
                    behind the ink on the surface.
                  </li>
                </ul>
                <p>
                  Note: UV Ink transfer stickers do not work on Paper products
                </p>
                <h5>Application guidelines:</h5>
                <p>
                  Suitable for flat and cylindrical surfaces that are hard in
                  nature.Ideal for indoor and outdoor use
                </p>
                <p>
                  MudraLanka India customizes all its products in facilities
                  located within India. Some of our raw materials, intermediate
                  components, and consumables used in the manufacturing of the
                  final product could be from one or more countries. As we
                  follow Global Sourcing, one product is likely to have a
                  different country of origin depending on the batch sold.
                </p>
                <h5>Country of origin: India</h5>
              </div>
            </div>
            <div class="section-two-imageContainer">
              <img
                src="images/service-stickerPrinting/services-details-image.png"
                alt="details"
                class=""
              />
            </div>
          </div>
        </div>
        <br />
        <div class="section-threeContainer">
          <h3>Related products</h3>
          <div class="relatedproduct-container">
            <div class="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div class="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div class="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div class="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div class="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div class="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StickerPrinting;
