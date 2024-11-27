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

const quantityOptions = [
  {
    quantity: 100,
    price: 200.0,
    savings: "",
    recommended: false,
  },
  {
    quantity: 200,
    price: 340.0,
    savings: "15% savings",
    recommended: true,
  },
  {
    quantity: 300,
    price: 480.0,
    savings: "20% savings",
    recommended: false,
  },
  {
    quantity: 400,
    price: 600.0,
    savings: "25% savings",
    recommended: false,
  },
  {
    quantity: 500,
    price: 700.0,
    savings: "30% savings",
    recommended: false,
  },
];

const images = [
  "images/service-visitingcard/service-visitingcard1.png",
  "images/service-visitingcard/service-visitingcard2.png",
  "images/service-visitingcard/service-visitingcard3.png",
  "images/service-visitingcard/service-visitingcard4.png",
  "images/service-visitingcard/service-visitingcard5.png",
];

const VisitingCard = () => {
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
    file.target.value = "";
  };
  console.log(data, "asdkjfjalksdf");
  // handle upload button click
  const handleButtonClick = () => {
    if (!data.quantity) {
      return toast("Please select a  quantity", { id: "quantity" });
    }
    imgRef.current.click();
  };

  // handle send mail
  const sendMail = async () => {
    if (!data.quantity) {
      return toast("Please select a quantity", { id: "quantity" });
    }
    // Size: ${size}\n
    const { quantity } = data;
    // Size: ${size}\n
    let body = `
      Quantity: ${quantity}\n\n`;
    formData.append("body", body);
    formData.append("subject", "New Order - Visiting Card - Mudralanka");

    try {
      setLoading(true);
      const response = await fetch(sendEmailLink, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Order placed successfully");
        setData({ size: "", quantity: "", file: "" });
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
            <h2 class="inner-banner__title">Visiting Cards Printing</h2>
            <ul class="thm-breadcrumb">
              <li class="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <Link to="/services">Services</Link>
              </li>
              <li class="thm-breadcrumb__item">
                <span>Visiting Cards Printing</span>
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
                {images.map((image) => (
                  <SwiperSlide>
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
                {images.map((image) => (
                  <SwiperSlide>
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
            <h2 class="main-heading">Standard Visiting Cards</h2>
            <h5 class="fw-normal fs-5 mb-4">
              Personalized cards with a professional look.
            </h5>
            <ul class="fw-medium fs-6 mb-3 visitingcardlist">
              <li>4000+ design options available</li>
              <li>
                Dimension shown on the design page includes bleed area (safety
                area),{" "}
                <strong>the final card size will be 8.9 cm x 5.1 cm</strong>
              </li>
              <li>
                Stretch your design up to the Bleed area to avoid white borders
                appearing around your card. Keep all your information within the
                safety area.
              </li>
              <li>
                <strong>
                  Choose bold fonts size 10 and above when using white text
                </strong>
              </li>
              <li>
                Need help in designing? You can avail our{" "}
                <Link to={"#"}>Design Services</Link>
              </li>
              <li>
                <strong>
                  Note: Please do not print designs belonging to
                  Government/Quasi Government bodies
                </strong>
              </li>
            </ul>
            <i class="fw-semibold fs-6">Cash on Delivery available</i>
            <div class="dropdown-section mb-4">
              <div class="dropdown-Heading">
                <h4 class="fw-bold fs-5">Visiting card</h4>
              </div>
            </div>

            {/* <h4 class="fw-bold fs-5">Quality</h4> */}
            <div class="list-group">
              {quantityOptions.map((item) => (
                <div
                  className={`${
                    data.quantity === item.quantity
                      ? "quality-list-container-activelink"
                      : "quality-list-container"
                  }`}
                  onClick={() =>
                    setData((prev) => ({
                      ...prev,
                      quantity:
                        prev.quantity === item.quantity ? "" : item.quantity,
                    }))
                  }
                  key={item.quantity}
                >
                  <div className="quality-list-first">
                    <span>{item.quantity}</span>
                    {item.recommended && (
                      <span className="quality-list-chip">Recommended</span>
                    )}
                    <div className="text-end">
                      <p className="mb-0 fw-medium">₹{item.price}</p>
                      <small className="quality-list-small">
                        ₹{item.price / item.quantity} / unit
                      </small>
                    </div>
                  </div>
                  <small className="text-secondary">{item.savings}</small>
                </div>
              ))}
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
            <div className="mt-4 secondary-btn">Add to Cart</div>
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
                  Your business is one of a kind. Now your Visiting Card can be,
                  too.
                </h3>
                <p>
                  With a fresh box of professional visiting cards comes
                  confidence – the knowledge that you’re prepared for every
                  opportunity that comes your way. Whether you’re making first
                  impressions, rewarding regulars with a loyalty card or giving
                  satisfied clients your contact info for next time, we’re here
                  to help you look and feel ready to impress.
                </p>
                <p>
                  As you design, we’ll offer you a wide range of personalisation
                  options – including paper stocks and finish options – that
                  could work for your style, business and budget.
                </p>
                <h3>Creative ways to use your visiting cards.</h3>
                <p>
                  Are you looking for something specific? Check out these
                  on-trend templates for top industries –Legal,Accounting & Tax
                  Advice,Bakeries,Auto Dealers,Music,Beauty & Spa,Agriculture &
                  Farming,Medical Professionals,Taxi Service,Graphic
                  Design,Courier Services, and ,more
                </p>
                <p>
                  For Bulk orders exceeding Rs. 20,000 in value, contact our
                  Customer Care for any assistance.
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
                  MudraLanka offers Standard Visiting Cards design templates in
                  assorted styles.
                </p>
              </div>
            </div>
            <div class="section-two-imageContainer">
              <img
                src="images/service-visitingcard/service-details-image.png"
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisitingCard;
