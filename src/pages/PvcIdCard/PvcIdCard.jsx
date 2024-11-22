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

const quantity = [
  "1 (170.00 / Unit)",
  "2 (130.00 / Unit)",
  "3 (110.00 / Unit)",
  "4 (100.00 / Unit)",
];

const PvcIdCard = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const formData = new FormData();
  const imgRef = useRef();
  const [data, setData] = useState({
    quantity: "",
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
  };

  // handle upload button click
  const handleButtonClick = () => {
    if (!data.quantity) {
      return toast("Please select a quantity", { id: "quantity" });
    }
    imgRef.current.click();
  };

  // handle send mail
  const sendMail = async () => {
    if (!data.quantity) {
      return toast("Please select a quantity", { id: "quantity" });
    }
    const { quantity } = data;
    let body = `
      Quantity: ${quantity}\n\n`;
    formData.append("body", body);

    try {
      setLoading(true);
      const response = await fetch(sendEmailLink, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Order placed successfully");
        setData({ quantity: "", file: "" });
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
            <h2 class="inner-banner__title">PVC ID CARD</h2>
            <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <Link to="/services">Services</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <span>PVC Id Card</span>
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
                    src="images/service-pvcidcard/service-pvcidcard1.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard2.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard3.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard4.png"
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
                    src="images/service-pvcidcard/service-pvcidcard5.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard6.png"
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
                    src="images/service-pvcidcard/service-pvcidcard1.png"
                    alt="similar product"
                    style={{ height: "100%" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard2.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard3.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard4.png"
                    alt="similar product"
                    style={{ height: "100% !important" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard5.png"
                    alt="similar product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/service-pvcidcard/service-pvcidcard6.png"
                    alt="similar product"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div class="details-container">
            <h2 class="main-heading">PVC ID CARD</h2>
            <p class="fw-normal fs-5 mb-4">
              Crafting Unique ID Cards to Reflect Your Identity
            </p>
            <h3 class="fw-semibold fs-6">Cash on Delivery available</h3>
            <ul class="fw-medium fs-6 mb-3">
              <li>Material: PVC 0.8 mm thickness card</li>
              <li>Finish: Semi-Gloss</li>
              <li>Size: 8.5 cm x 5.4 cm</li>
              <li>Both side printing available</li>
              <li>Decoration Technology: Digital Printing</li>
              <li>
                Looking for Personalised Lanyards?
                <Link href="#" class="text-primary text-decoration-underline">
                  Click here
                </Link>
              </li>
              <li>
                Please do not print Aadhar Cards/PAN cards/Voter IDs/Driving
                License or any ID Cards/Lanyards belonging to
                Government/Government Authorities/Quasi Government bodies.
              </li>
              <li>
                You are solely accountable/liable for the product and its
                utilization in the event that it is found to be offensive,
                harmful, harassing, libelous, threatening, obscene, malicious,
                or otherwise objectionable or illegal.
              </li>
            </ul>
            {/* <p class="fw-medium fs-6">
              Price below is MRP (inclusive of all taxes)
            </p> */}
            {/* <ul>
              <li >
                View Specs & Templates to create your print-ready file. Fetching
                compatible options Quantity
              </li>
            </ul> */}
            <div className="seeDetails">
              <span class="fw-bold text-decoration-underline ms-3">
                See Details
              </span>
              <span class="fw-bold text-decoration-underline ms-3">
                View Specs & Templates
              </span>
              <span class="fw-bold text-decoration-underline ms-2">
                to create your print-ready file.
              </span>
            </div>
            <div class="dropdown-section mb-4">
              <div class="dropdown-Heading">
                <h4 class="fw-bold fs-5">Quality</h4>
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
                  Select Quantity
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">
                    1(170.00/ Unit)
                  </button>
                  <button class="dropdown-item" type="button">
                    2(130.00/ Unit)
                  </button>
                  <button class="dropdown-item" type="button">
                    3(110.00/ Unit)
                  </button>
                  <button class="dropdown-item" type="button">
                    4(100.00/ Unit)
                  </button>
                </div>
              </div>
              {/* <select
                onChange={(e) =>
                  setData((prev) => ({ ...prev, quantity: e.target.value }))
                }
                class="options-container"
              >
                <option value={""} selected>
                  Select Quantity
                </option>
                {quantity.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select> */}
              {/* <select class="options-container">
                <option selected>Select Quantity</option>
                <option>1(170.00/ Unit)</option>
                <option>2(130.00/ Unit)</option>
                <option>3(110.00/ Unit)</option>
                <option>4(100.00/ Unit)</option>
              </select> */}
            </div>

            {/* <h4 class="fw-bold fs-5">Quality</h4> */}
            {/* <div class="list-group">
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
            </div> */}

            {/* <p class="starting-price">
              24 starting at ₹940.00
              <span class="">See more quantities</span>
              <span class="">FREE Shipping</span>
            </p> */}
            <div className="seeDetails">
              <span class="fw-bold text-decoration-underline ms-3">
                See more quantities
              </span>
              <span class="fw-bold text-decoration-underline ms-2">
                FREE Shipping
              </span>
            </div>

            <h4 class="fw-bold fs-5">Upload Design</h4>
            <input
              name="myImg"
              hidden
              accept="image/png,image/jpeg,image/jpg"
              onChange={(e) => onImgChange(e)}
              ref={imgRef}
              type="file"
            />
            <button onClick={handleButtonClick}>
              Have a design? Upload it
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
                  Design and print custom ID cards that reflect your
                  organisation's brand and identity.
                </h3>
                <p>
                  Are you seeking a reliable and efficient solution for creating
                  and printing custom ID cards that mirror your organisation's
                  distinct brand and identity? Look no further! MudraLanka
                  specialises in providing top-notch ID card printing services
                  tailored to your unique requirements. Whether you need
                  employee ID cards or student IDs, we've got you covered.
                </p>
                <p>
                  Our professional ID cards can include essential details such
                  as photos, names, titles, and any other relevant information
                  you require. We understand the importance of a secure and
                  professional Identity card and guarantee that your cards will
                  meet these standards.
                </p>
                <p>
                  Ready to order your custom office ID cards? Our user-friendly
                  online platform makes it a breeze. We guarantee sharp,
                  vibrant, and long-lasting ID cards using top-of-the-line
                  printing technology. Simply upload your company logo, employee
                  name, message, photo, or any other specifications, and witness
                  them come to life on your identity cards online. Once you've
                  finalised your design, sit back and relax—let us handle the
                  rest, ensuring a seamless printing and delivery process.
                </p>
                <h5>
                  Note: We do NOT print any Government ID Cards / Aadhar Cards
                  /PAN cards / Voter IDs / Driving License. You may also be
                  asked to provide an authorisation letter.
                </h5>

                <p>
                  Identity cards are thick PVC cards with a Semi Glossy finish
                  and are customisable on both sides. They come with a sturdy
                  and transparent PVC holder but without a lanyard (strap worn
                  around the neck).
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
                src="images/service-pvcidcard/service-details-image.png"
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

export default PvcIdCard;
