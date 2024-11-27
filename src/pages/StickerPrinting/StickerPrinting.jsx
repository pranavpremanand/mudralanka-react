import React, { useContext, useRef, useState } from "react";
import "./StickerPrinting.css";
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

const sizes = ["48x34", "72x34", "96x34", "120x34"];

const images = [
  "images/service-stickerPrinting/service-stickerPrintingimg1.png",
  "images/service-stickerPrinting/service-stickerPrintingimg2.png",
  "images/service-stickerPrinting/service-stickerPrintingimg3.png",
  "images/service-stickerPrinting/service-stickerPrintingimg4.png",
  "images/service-stickerPrinting/service-stickerPrintingimg5.png",
  "images/service-stickerPrinting/service-stickerPrintingimg6.png",
];

const quantities = [
  {
    quantity: 24,
    price: 940,
    isRecommended: false,
    savings: "2%",
  },
  {
    quantity: 48,
    price: 1880,
    isRecommended: true,
    savings: "4%",
  },
  {
    quantity: 96,
    price: 3770,
    isRecommended: false,
    savings: "6%",
  },
  {
    quantity: 144,
    price: 5560,
    isRecommended: false,
    savings: "8%",
  },
];

const StickerPrinting = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const formData = new FormData();
  const imgRef = useRef();
  const [data, setData] = useState({
    size: "Select Size",
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

  // handle upload button click
  const handleButtonClick = () => {
    if (data.size === "Select Size" || data.quantity === "") {
      return toast("Please select a size and quantity", { id: "size" });
    }
    if (data.quantity === "") {
      return toast("Please select a size and quantity", { id: "quantity" });
    }
    imgRef.current.click();
  };

  // handle send mail
  const sendMail = async () => {
    if (data.size === "Select Size") {
      return toast("Please select a size and quantity", { id: "size" });
    }
    if (data.quantity === "") {
      return toast("Please select a size and quantity", { id: "quantity" });
    }
    const { size, quantity } = data;
    let body = `
      Size: ${size}\n
      Quantity: ${quantity}\n\n`;
    formData.append("subject", "New Order - Sticker Printing - Mudralanka");
    formData.append("body", body);

    try {
      setLoading(true);
      const response = await fetch(sendEmailLink, {
        method: "POST",
        body: formData,
      });
      // const response = { ok: true };
      if (response.ok) {
        toast.success("Order placed successfully");
        setData({ size: "Select Size", quantity: "", file: "" });
      } else {
        toast.error("Error placing order");
      }
    } catch (error) {
      toast.error("Error placing order " + error.message, { id: "error" });
    } finally {
      setLoading(false);
    }
  };

  // handle add item to cart click
  const addItemToCart = () => {
    if (data.size === "Select Size" || data.quantity === "") {
      toast("Please select a size and quantity", { id: "error" });
    }
  };

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setSelectedImage(images[currentIndex % images.length]);
  };
  return (
    <div className="page-wrapper">
      <Header />
      <div className="main-container">
        <div className="inner-banner thm-black-bg text-center">
          <div className="container">
            <h2 className="inner-banner__title">Sticker Printing</h2>
            <ul className="thm-breadcrumb">
              <li className="thm-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li className="thm-breadcrumb__item">
                <Link to="/services">Services</Link>
              </li>
              <li className="thm-breadcrumb__item">
                <span>Sticker Printing</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-oneContainer">
          <div className="images-container">
            <div className="image-gallery">
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
                onSlideChange={handleSlideChange}
              >
                {images.map((image) => (
                  <SwiperSlide key={image}>
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

          <div className="details-container">
            <h2 className="main-heading">UV Ink Transfer Stickers</h2>
            <p className="fw-normal fs-5 mb-4">
              Unlock limitless creativity with our cutting-edge UV Ink Transfer
              Stickers.
            </p>
            <h3 className="fw-semibold fs-6">Cash on Delivery available</h3>
            <ul className="fw-medium fs-6 mb-3">
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

            <div className="dropdown-section mb-4">
              <div className="dropdown-Heading">
                <h4 className="d-inline fw-bold fs-5">Size</h4>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ background: "white" }}
                >
                  {data.size}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {sizes.map((item) => (
                    <button
                      className="dropdown-item"
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
                </div>
              </div>
            </div>

            <h4 className="fw-bold fs-5">Quantity</h4>
            <div className="list-group">
              {quantities.map((item) => (
                <div
                  key={item.quantity}
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
                >
                  <div className="quality-list-first">
                    <span>{item.quantity}</span>
                    {item.isRecommended && (
                      <span className="quality-list-chip">Recommended</span>
                    )}
                    <div className="text-end">
                      <p className="mb-0 fw-medium">₹{item.price}</p>
                      <small className="quality-list-small">
                        ₹{Math.floor(item.price / item.quantity)} / unit
                      </small>
                    </div>
                  </div>
                  <small className="text-secondary">{item.savings} savings</small>
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
            <div onClick={addItemToCart} className="mt-4 secondary-btn">
              Add to Cart
            </div>
          </div>
        </div>
        <div className="section-twoContainer">
          <div className="tab">
            <h3 className="">overview</h3>
          </div>
          <div className="details-container">
            <div className="section-two-details">
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
            <div className="section-two-imageContainer">
              <img
                src="images/service-stickerPrinting/services-details-image.png"
                alt="details"
                className=""
              />
            </div>
          </div>
        </div>
        <br />
        <div className="section-threeContainer">
          <h3>Related products</h3>
          <div className="relatedproduct-container">
            {relatedProducts.map((obj) => (
              <div key={obj.id} className="relatedproducd-one">
                <img src={obj.img} alt="related product" />
                <h4>{obj.title}</h4>
                <p>{obj.text}</p>
              </div>
            ))}
            {/* <div className="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div className="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div className="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div className="relatedproducd-one">
              <img
                src="images/service-stickerPrinting/related-productone.png"
                alt="related product"
              />
              <h4>Sheet Stickers</h4>
              <p>24 starting at ₹160.00</p>
            </div>
            <div className="relatedproducd-one">
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

export default StickerPrinting;
