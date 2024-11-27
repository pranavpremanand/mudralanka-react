import React, { useState } from "react";
import "./Cart.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
// import image from "images/icons/id-card-1-1.jpg";
const initialCartItems = [
  {
    id: 1,
    image: "images/icons/id-card-1-1.jpg",
    title: "Sticker Printing",
    size: "",
    price: 230,
    quantity: 1,
  },
  {
    id: 2,
    image: "images/icons/id-card-1-1.jpg",
    title: "PVC ID Card",
    size: "",
    price: 450,
    quantity: 1,
  },
  {
    id: 3,
    image: "images/icons/id-card-1-1.jpg",
    title: "Mobile Case Printing",
    size: "",
    price: 320,
    quantity: 1,
  },
  {
    id: 4,
    image: "images/icons/id-card-1-1.jpg",
    title: "Visiting Card",
    size: "",
    price: 750,
    quantity: 1,
  },
];

const sizes = ["48x34", "72x34", "96x34", "120x34"];

const Cart = () => {
  // const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [data, setData] = useState({
    size: "Select Size",
    quantity: "",
    file: "",
  });
  const navigate = useNavigate();

  const increment = (id) => {
    const updatedData = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedData));
    setCartItems(updatedData);
  };

  const decrement = (id) => {
    const updatedData = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cartItems", JSON.stringify(updatedData));
    setCartItems(updatedData);
  };

  const emptyCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
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
          {/* <h1>My Cart</h1> */}
          <div className="">
            {cartItems.length === 0 ? (
              <div
                className="cart-emptyCart-container w-full flex flex-col justify-center items-center h-[90vh]"
              >
                <h3 className="heading-2 uppercase text-center mb-3">
                  YOUR BAG IS EMPTY
                </h3>

                <Link
                  to="#"
                  className="cart-btn cart-cartitem-buttons-two text-center primary-btn min-w-[18rem] mt-20"
                >
                  SHOP OUR PRODUCTS
                </Link>
              </div>
            ) : (
              <div data-aos="fade-up" className="my-10 cart-container">
                <h2 className=" cart-cartitems-heading">SHOPPING CART</h2>
                <div className="cart-cartitems-container grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="cart-cartitem flex flex-col gap-5 border w-full p-6 rounded-lg shadow-sm"
                    >
                      <img
                        // src={item.img}
                        src="images/icons/id-card-1-1.jpg"
                        alt={item.title}
                        // className="w-full h-40 object-contain"
                      />
                      <h4 className="text-xl text-start tracking-widest">
                        {item.title}
                      </h4>
                      <h6 className="text-sm text-start tracking-widest flex items-start">
                        ₹ {item.price}
                      </h6>

                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{
                            background: "white",
                            width: "100%",
                          }}
                        >
                          {data.size}
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenu2"
                        >
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
                    "2" x "2"
                  </button>
                  <button class="dropdown-item" type="button">
                    "2" x "4"
                  </button>
                  <button class="dropdown-item" type="button">
                    "3" x "3"
                  </button>
                  <button class="dropdown-item" type="button">
                    "3" x "6"
                  </button> */}
                        </div>
                      </div>
                      <div className="cart-cartitem-count flex gap-5 border w-fit px-3 py-1 rounded-full select-none">
                        {item.quantity === 1 ? (
                          <CiTrash
                            className="cart-cartitem-count-buttons"
                            onClick={() => decrement(item.id)}
                          />
                        ) : (
                          <FiMinus
                            className="cart-cartitem-count-buttons "
                            onClick={() => decrement(item.id)}
                          />
                        )}
                        <p className="cart-cartitem-count-p ">
                          {item.quantity}
                        </p>
                        <GoPlus
                          className="cart-cartitem-count-buttons"
                          onClick={() => increment(item.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-cartitem-subtotal-container border-t mt-10 py-5">
                  <div className="cart-cartitem-subtotal-area flex justify-end">
                    <h1 className="text-xl text-end pl-3 min-w-[260px]">
                      Subtotal (
                      <span className="w-4">
                        {cartItems.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        item
                        {cartItems.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        ) > 1
                          ? "s"
                          : ""}
                      </span>
                      ):{" "}
                      <span className="font-bold inline">₹ {totalPrice}</span>
                    </h1>
                  </div>

                  <div className="cart-cartitem-buttons-container flex justify-end mt-10 gap-5">
                    <button
                      className="cart-btn cart-cartitem-buttons-one text-white bg-black hover:bg-black/70 uppercase"
                      onClick={emptyCart}
                    >
                      Clear Cart
                    </button>
                    <button
                      className="cart-btn cart-cartitem-buttons-two"
                      onClick={() => navigate("/checkout")}
                    >
                      To Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
