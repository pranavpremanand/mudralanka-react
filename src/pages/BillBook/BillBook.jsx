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

const sizes = ["'3.8' x '7.8'", "'4' x '5.5'", "'5.5' x '8.5'", "'8.5' x '11'"];
const quantity = [
  "1(200.00 / unit)",
  "2(200.00 / unit)",
  "3(200.00 / unit)",
  "4(200.00 / unit)",
];
const BillBook = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const formData = new FormData();
  const imgRef = useRef();
  const [data, setData] = useState({
    size: "",
    quantity: "1(200.00 / unit)",
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
  console.log(data, "aldsfkjaklsdfj");
  // handle upload button click
  const handleButtonClick = () => {
    if (!data.size) {
      return toast("Please select a size", { id: "size" });
    }
    imgRef.current.click();
  };

  // handle send mail
  const sendMail = async () => {
    if (!data.size || !data.quantity) {
      return toast("Please select a size and quantity", { id: "size" });
    }
    const { size, quantity } = data;
    let body = `
      Size: ${size}\n
      Quantity: ${quantity}\n\n`;
    formData.append("body", body);
    formData.append("subject", "New Order - Bill Book - Mudralanka");

    try {
      setLoading(true);
      const response = await fetch(sendEmailLink, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Order placed successfully");
        setData({ size: "", quantity: "1(200.00 / unit)", file: "" });
      } else {
        toast.error("Error placing order");
      }
    } catch (error) {
      toast.error("Error placing order " + error.message, { id: "error" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div class="page-wrapper">
      <Header />
      <div class="main-container">
        <div class="inner-banner thm-black-bg text-center">
          <div class="container">
            <h2 class="inner-banner__title">Bill Book</h2>
            <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <Link to="/services">Services</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <span>Bill Book</span>
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
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook1.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook2.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook3.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook4.png"
                    alt="similar product"
                    style={{
                      height: "100% !important",
                      // aspectRatio: "1/1",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook5.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook6.png"
                    alt="similar product"
                  />
                </SwiperSlide>
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
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook1.png"
                    alt="similar product"
                    style={{ height: "100%" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook2.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook3.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook4.png"
                    alt="similar product"
                    style={{ height: "100% !important" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook5.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-billbook/service-billbook6.png"
                    alt="similar product"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div class="details-container">
            <h2 class="main-heading">Bill Book</h2>
            <h5 class="fw-normal fs-5 mb-4">
              Perfect for invoices or using as receipt books
            </h5>
            <ul class="fw-medium fs-6 mb-3 visitingcardlist">
              <li>50 sheets per pad</li>
              <li>Available in 4 sizes</li>
              <li>90 gsm acid-free paper</li>
              <li>Magnetic option for fridges or desks</li>
              <li>
                Upload your own bill book design or customize with your logo and
                address
              </li>
              <li>Can also be used as – Notepads.</li>
              <li>
                <strong>
                  We don’t provide carbon copy OR pink / yellow copies OR serial
                  numbers
                </strong>
              </li>
            </ul>
            <i class="fw-semibold fs-6">Cash on Delivery available</i>
            <h5 class="fw-medium fs-6">
              Price below is MRP (inclusive of all taxes)
            </h5>
            {/* <ul>
              <li >
                View Specs & Templates to create your print-ready file. Fetching
                compatible options Quantity
              </li>
            </ul> */}
            {/* <div className="seeDetails">
              <span class="fw-bold text-decoration-underline ms-3">
                See Details
              </span>
              <span class="fw-bold text-decoration-underline ms-3">
                View Specs & Templates
              </span>
              <span class="fw-bold text-decoration-underline ms-2">
                to create your print-ready file.
              </span>
            </div> */}
            {/* <div className="billbookselection-container"> */}
            {/* <div class="dropdown-section option mb-4"> */}
            <div class="dropdown-Heading">
              <h4 class="fw-bold fs-5">Size</h4>
            </div>

            <div className="billbookselection-container">
              <div class="dropdown drop">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ background: "white" }}
                >
                  Select Size
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {sizes.map((item) => (
                    <button
                      class="dropdown-item"
                      type="button"
                      value={item}
                      key={item}
                      onClick={() =>
                        setData((prev) => ({ ...prev, size: item }))
                      }
                    >
                      {item}
                    </button>
                  ))}
                  {/* <button class="dropdown-item" type="button">
                    100
                  </button>
                  <button class="dropdown-item" type="button">
                    200
                  </button>
                  <button class="dropdown-item" type="button">
                    300
                  </button>
                  <button class="dropdown-item" type="button">
                    400
                  </button>
                  <button class="dropdown-item" type="button">
                    500
                  </button> */}
                </div>
              </div>
              <div class="dropdown drop">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ background: "white" }}
                >
                  Select Size
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {quantity.map((item) => (
                    <button
                      class="dropdown-item"
                      type="button"
                      value={item}
                      key={item}
                      onClick={() =>
                        setData((prev) => ({ ...prev, quantity: item }))
                      }
                    >
                      {item}
                    </button>
                  ))}
                  {/* <button class="dropdown-item" type="button">
                    100
                  </button>
                  <button class="dropdown-item" type="button">
                    200
                  </button>
                  <button class="dropdown-item" type="button">
                    300
                  </button>
                  <button class="dropdown-item" type="button">
                    400
                  </button>
                  <button class="dropdown-item" type="button">
                    500
                  </button> */}
                </div>
              </div>
            </div>
            {/* <select class="options-container">
                  <option selected>Select Size</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                </select> */}
            {/* </div> */}
            {/* <div class="dropdown-section option mb-4">
                <div class="dropdown-Heading">
                  <h4 class="fw-bold fs-5">Quantity</h4>
                </div>
                <select class="options-container">
                  <option selected>Select Quantity</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                </select>
              </div> */}
            {/* </div> */}

            {/* <h4 class="fw-bold fs-5">Quality</h4> */}
            {/* <div class="list-group">
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>100</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">₹200.00</p>
                    <small class="quality-list-small">₹2.00 / unit</small>
                  </div>
                </div>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>200</span>
                  <span class="quality-list-chip">Recommended</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">340.00</p>
                    <small class="quality-list-small">₹1.70 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">15% savings</small>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>300</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">430.00</p>
                    <small class="quality-list-small">₹1.60 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">20% savings</small>
              </div>

              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>400</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">600.00</p>
                    <small class="quality-list-small">₹1.50 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">25% savings</small>
              </div>
              <div class="quality-list-container">
                <div class="quality-list-first">
                  <span>500</span>
                  <div class="text-end">
                    <p class="mb-0 fw-medium">700.00</p>
                    <small class="quality-list-small">₹1.40 / unit</small>
                  </div>
                </div>
                <small class="text-secondary">30% savings</small>
              </div>
            </div> */}

            <p class="starting-price">
              1 starting at 150.00
              {/* <span class="">See more quantities</span>
              <span class="">FREE Shipping</span> */}
            </p>
            {/* <div>
              <label className="addonitems">
                <input
                  type="checkbox"
                  name="flexible-glass"
                  value="flexible-glass"
                />
                Add Flexible Glass Screen Guard <s>99.00</s> 29.00
              </label>
              <label className="addonitems">
                <input type="checkbox" name="key-chain" value="key-chain" />
                Add Same Design Key Chain 99.00 29.00
              </label>
            </div> */}

            {/* <div className="seeDetails">
              <span class="fw-bold text-decoration-underline ms-3">
                See more quantities
              </span>
              <span class="fw-bold text-decoration-underline ms-2">
                FREE Shipping
              </span>
            </div> */}

            <h4 class="fw-bold fs-5">Upload Design</h4>
            <input
              name="myImg"
              hidden
              accept="image/png,image/jpeg,image/jpg"
              onChange={(e) => onImgChange(e)}
              ref={imgRef}
              type="file"
            />
            <button button onClick={handleButtonClick}>
              Have a design? Upload and edit it
              <img
                src="images/service-stickerPrinting/svg/UploadIcon.svg"
                alt="upload"
              />
            </button>
            {/*
            <p class="satisfaction">
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
                <h3>Custom bill books for your daily business transactions.</h3>
                <p>
                  Looking for an easy and unexpected way to build your personal
                  or professional brand? Consider custom bill books or notepads
                  featuring your name and logo.
                </p>
                <p>
                  Having a customized bill book or notepad adds a dash of
                  professionalism to your approach. At MudraLanka , you can
                  design Bill Books, Receipts Books or Notepads online, without
                  taking the effort of visiting your local vendor. Get
                  customized bill books or notepads, with premium quality paper
                  and hundreds of colorful designs that suit your business.
                  Choose from a variety of themes available with us or you can
                  upload your own design. You can go with a cardboard backside
                  or a magnetic backing to hang them on desks.
                </p>
                <p>
                  Ready to create? Start by browsing our assortment of fully
                  customisable designs. Once you’ve found a favourite, make it
                  yours by adding custom touches and choosing the option that
                  works best for you. After that, we’ll take care of the rest –
                  professionally printing and shipping your order. Your custom
                  creation will arrive looking crisp, polished and ready for its
                  first entry.
                </p>
                <h3>Creative ways to use your Bill Books.</h3>
                <p>
                  Are you looking for something specific? Check out these
                  on-trend templates for top industries - Food & Beverage,Travel
                  & Accommodation,Automotive & Transportation,Health &
                  Wellness,Education Services,Construction and Real
                  Estate,Jewellery,Entertainment & Recreation,Household
                  Services, and ,more.
                </p>

                <i>
                  MudraLanka India customizes all its products in facilities
                  located within India. Some of our raw materials, intermediate
                  components, and consumables used in the manufacturing of the
                  final product could be from one or more countries. As we
                  follow Global Sourcing, one product is likely to have a
                  different country of origin depending on the batch sold.
                </i>

                <h5>Country of Origin: India</h5>
                <p>
                  MudraLanka offers  Bill Books design templates in assorted
                  styles.
                </p>
              </div>
            </div>
            <div class="section-two-imageContainer">
              <img
                src="images/service-billbook/service-details-image.png"
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

export default BillBook;
