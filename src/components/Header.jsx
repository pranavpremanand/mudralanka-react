import React from "react";
import {
  FaInstagram,
  FaPhoneSquareAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { headerLinks, socialMediaLinks } from "../constant";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  document.addEventListener("DOMContentLoaded", function () {
    // Check if there are elements with the class `.main-navigation .navigation-box`
    var navigationBox = document.querySelector(
      ".main-navigation .navigation-box"
    );

    if (navigationBox) {
      // Select the main menu toggler and sub-navigation togglers
      var mainNavToggler = document.querySelector(
        ".header-navigation .menu-toggler"
      );
      var subNavTogglers = document.querySelectorAll(
        ".main-navigation .sub-nav-toggler"
      );

      // Handle main menu toggle
      if (mainNavToggler) {
        mainNavToggler.addEventListener("click", function (event) {
          event.preventDefault();
          var menuSelector = this.getAttribute("data-target");
          var menu = document.querySelector(menuSelector);

          if (menu) {
            // Toggle the display and class of the target menu
            if (menu.style.display === "none" || menu.style.display === "") {
              menu.style.display = "block";
              menu.classList.add("showen");
            } else {
              menu.style.display = "none";
              menu.classList.remove("showen");
            }
          }
        });
      }

      // Handle sub-navigation togglers
      subNavTogglers.forEach(function (subNavToggler) {
        subNavToggler.addEventListener("click", function (event) {
          event.preventDefault();
          var subMenu =
            this.parentElement.parentElement.querySelector(".sub-menu");

          if (subMenu) {
            // Toggle the display of the sub-menu
            if (
              subMenu.style.display === "none" ||
              subMenu.style.display === ""
            ) {
              subMenu.style.display = "block";
            } else {
              subMenu.style.display = "none";
            }
          }
        });
      });
    }
  });
  return (
    <header className="site-header header-one">
      <div className="top-bar">
        <div className="container">
          <div className="social-block">
            <a href={socialMediaLinks.whatsapp}>
              <FaWhatsapp size={18} />
            </a>
            <a href={socialMediaLinks.youtube}>
              <FaYoutube size={18} />
            </a>
            <a href={socialMediaLinks.instagram}>
              <FaInstagram size={18} />
            </a>
          </div>
          <div className="logo-block">
            <Link to="/">
              <img
                src="images/resources/logo-1-1.png"
                className="logo"
                alt="logo"
              />
            </Link>
          </div>
          <div className="right-block">
            <a href="mailto:mudralankashop@gmail.com">
              <IoMail className="text-white fill-primary mr-2" size={20} />
              mudralankashop@gmail.com
            </a>
            <a href="tel:+917799372747">
              <FaPhoneSquareAlt
                className="text-white fill-primary mr-2"
                size={20}
              />
              +917799372747
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <button className="menu-toggler" data-target="#main-nav-bar">
              <GiHamburgerMenu size={28} />
            </button>
          </div>

          <div className="main-navigation" id="main-nav-bar">
            <ul className="navigation-box">
              {headerLinks.map((link) => (
                <li
                  key={link.path}
                  className={`${link.path === pathname && "current"}`}
                >
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-side-box">
            <div className="header__social-block">
              <a href={socialMediaLinks.whatsapp}>
                <FaWhatsapp size={18} />
              </a>
              <a href={socialMediaLinks.youtube}>
                <FaYoutube size={18} />
              </a>
              <a href={socialMediaLinks.instagram}>
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
