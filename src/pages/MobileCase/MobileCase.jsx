import React, { useContext, useRef, useState } from "react";
import "../StickerPrinting/StickerPrinting.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { relatedProducts, sendEmailLink } from "../../constant";
import toast from "react-hot-toast";
import { SpinnerContext } from "../../components/SpinnerContext";

const brand = ["Apple", "Samsung", "OnePlus", "Nothing"];
const images = [
  "images/service-mobilecase/service-mobilecase1.png",
  "images/service-mobilecase/service-mobilecase2.png",
  "images/service-mobilecase/service-mobilecase3.png",
  "images/service-mobilecase/service-mobilecase4.png",
  "images/service-mobilecase/service-mobilecase5.png",
  "images/service-mobilecase/service-mobilecase6.png",
];

const MobileCase = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [screenGuard, setScreenGuard] = useState(false);
  const [keyChain, setKeyChain] = useState(false);
  const formData = new FormData();
  const imgRef = useRef();
  const [data, setData] = useState({
    quantity: 1,
    brand: "Select Mobile Brand",
    file: "",
  });
  const { setLoading } = useContext(SpinnerContext);

  // on image change
  const onImgChange = (file) => {
    if (file.target.files && file.target.files[0]) {
      const selectedFile = file.target.files[0];
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg"
      ) {
        // Validate file size (max size: 5MB)
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
        if (selectedFile.size <= maxSizeInBytes) {
          setData((prev) => ({ ...prev, file: selectedFile }));
          formData.append("file", selectedFile);
          sendMail();
        } else {
          toast("File size should not exceed 5MB");
        }
      } else {
        toast("Select an image file");
      }
    }
    file.target.value = "";
  };
  console.log(data.brand !== "Select Mobile Brand", "aldsfkjaklsdfj");
  // handle upload button click
  const handleButtonClick = () => {
    if (data.brand === "Select Mobile Brand") {
      return toast("Please select a brand", { id: "brand" });
    } else {
      imgRef.current.click();
    }
  };

  // handle send mail
  const sendMail = async () => {
    if (!data.brand && data.brand === "Select Mobile Brand") {
      return toast("Please select a brand", { id: "brand" });
    }
    const { quantity, brand } = data;
    let body = `
      Screenguard: ${screenGuard ? "✅" : "❌"}\n
      Keychain: ${keyChain ? "✅" : "❌"}\n
      Quantity: ${quantity}\n\n
      Brand: ${brand}\n\n`;
    formData.append("body", body);
    formData.append("subject", "New Order - Mobile Case - Mudralanka");
    try {
      setLoading(true);
      const response = await fetch(sendEmailLink, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Order placed successfully");
        setData({ quantity: 1, brand: "Select Mobile Brand", file: "" });
        setKeyChain(false);
        setScreenGuard(false);
      } else {
        toast.error("Error placing order");
      }
    } catch (error) {
      toast.error("Error placing order " + error.message, { id: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleScreenGuardChange = (e) => {
    setScreenGuard(e.target.checked);
  };

  const handleKeyChainChange = (e) => {
    setKeyChain(e.target.checked);
  };
  return (
    <div class="page-wrapper">
      <Header />
      <div class="main-container">
        <div class="inner-banner thm-black-bg text-center">
          <div class="container">
            <h2 class="inner-banner__title">Mobile Case Printing</h2>
            <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <Link to="/services">Services</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <span>Mobile Case Printing</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="section-oneContainer">
          <div class="images-container">
            <div class="image-gallery">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                  alignItems: "center",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper22"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt="similar product" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper1"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt="similar product"
                      style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div class="details-container">
            <h2 class="main-heading">Mobile Case Printing</h2>
            <p class="fw-normal fs-5 mb-4">
              Crafting Unique ID Cards to Reflect Your Identity
            </p>
            <h3 class="fw-semibold fs-6">Cash on Delivery available</h3>
            <ul class="fw-medium fs-6 mb-3">
              <li>Thin & light Poly-carbonate case</li>
              <li>Smooth & seam-free surface</li>
              <li>Photo-realistic print quality</li>
              <li>Hassle-free replacements</li>
              <li>Delivery in 5-7 working days</li>
            </ul>
            <div class="dropdown-section mb-4">
              <div class="dropdown-Heading">
                <h4 class="fw-bold fs-5">Mobile Brand</h4>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ background: "white" }}
                >
                  {data.brand}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {brand.map((item) => (
                    <button
                      class="dropdown-item"
                      type="button"
                      value={item}
                      key={item}
                      onClick={() =>
                        setData((prev) => ({ ...prev, brand: item }))
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="addonitems">
                <input
                  type="checkbox"
                  name="flexible-glass"
                  checked={screenGuard}
                  onChange={handleScreenGuardChange}
                />
                Add Flexible Glass Screen Guard <s>99.00</s> 29.00
              </label>
              <label className="addonitems">
                <input
                  type="checkbox"
                  name="key-chain"
                  checked={keyChain}
                  onChange={handleKeyChainChange}
                />
                Add Same Design Key Chain 99.00 29.00
              </label>
            </div>

            <h4
              style={{ fontSize: "16px", fontWeight: "600", marginTop: "2rem" }}
            >
              Have a design? You can upload it using the upload button. Our
              designer will redesign it and confirm with you before printing.
              Upload Design
            </h4>
            <input
              name="myImg"
              hidden
              accept="image/png,image/jpeg,image/jpg"
              onChange={(e) => onImgChange(e)}
              ref={imgRef}
              type="file"
            />
            <button onClick={handleButtonClick}>
              Upload
              <img
                src="images/service-stickerPrinting/svg/UploadIcon.svg"
                alt="upload"
              />
            </button>
            <div className="mt-4 secondary-btn">
              Add to Cart
            </div>
            {/* <p class="satisfaction">
              <img
                src="images/service-stickerPrinting/svg/guaranteedsatisfaction.svg
            "
                alt="upload"
              />
              100% satisfaction guaranteed
            </p> */}
          </div>
        </div>
        <div class="section-twoContainer">
          <div class="tab">
            <h3 class="">overview</h3>
          </div>
          <div class="details-container">
            <div class="section-two-details">
              <div>
                <h3>Additional Information</h3>
                <p>
                  <strong>MATERIAL:</strong> Impact resistant and highly durable
                  polycarbonate.
                </p>
                <p>
                  <strong> PRINT:</strong> Matte finish ultra HD Lifetime
                  warranty on print. Super-bright colors embedded directly into
                  the case. Made with high precision to get a crisp clear print.
                  The Colorful patterns let you express your unique personality.
                  Our Unique Edge-to-edge Printing technology provides a smooth
                  clean look that really stands out from ordinary Mobile Back
                  Covers & Cases.
                </p>
                <p>
                  <strong> PRODUCT SPECIALITY:</strong> Slim fitting with design
                  wrapping around side of the case and full access to ports.
                </p>
                <p>Compatible with standard wireless charging.</p>
                <p>
                  Despite a very thin profile and Weight 15 Gram(
                  <strong>Negligible Weight</strong>)
                </p>
                <p>the case is much stronger than it looks at first sight.</p>
                <p>
                  <strong> PRODUCT DETAILS:</strong> Slim, One-piece, Clip-on,
                  Light, Durable Polycarbonate Protective Hard Case.
                </p>
                <p>
                  Includes cut-outs for your regular charger and headphones.
                  Provides Easy Protection for Your Smartphone.
                </p>
                <p>
                  All side design Case covers 100% of the outer surface of the
                  phone.
                </p>
                <p>Precision molded with no seams or sharp edges.</p>
                <p>
                  High quality printing No peeling, chipping, or wearing off.
                </p>
                <p>
                  <strong>Please Note:</strong>
                  Colors May Slightly Vary Depending on Your Screen Brightness.
                </p>
                <p>Additional Product Information</p>
                <h5>Net quantity: 1 </h5>
                <h5>Country of Origin: India</h5>
              </div>
            </div>
            <div class="section-two-imageContainer">
              <img
                src="images/service-mobilecase/service-details-image.png"
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
            {relatedProducts.map((obj) => (
              <div key={obj.id} class="relatedproducd-one">
                <img src={obj.img} alt="related product" />
                <h4>{obj.title}</h4>
                <p>{obj.text}</p>
              </div>
            ))}
            {/* <div class="relatedproducd-one">
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
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileCase;
