import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({}); // To track sub-menu states

  // Toggle main menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle a specific sub-menu
  const toggleSubMenu = (menuIndex) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuIndex]: !prev[menuIndex],
    }));
  };

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
            <button
              className="menu-toggler"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <GiHamburgerMenu size={28} />
            </button>
          </div>

          <div
            className={`main-navigation ${
              isMenuOpen ? "showen" : ""
            }`}
            id="main-nav-bar"
          >
            <ul className="navigation-box">
              {headerLinks.map((link, index) => (
                <li
                  key={link.path}
                  className={`${
                    link.path === pathname ? "current" : ""
                  } ${
                    openSubMenus[index] ? "sub-menu-open" : ""
                  }`}
                >
                  <Link to={link.path}>{link.title}</Link>

                  {/* Example sub-menu */}
                  {link.subMenu && (
                    <>
                      <button
                        className="sub-nav-toggler"
                        onClick={() => toggleSubMenu(index)}
                      >
                        ▼
                      </button>
                      <ul
                        className="sub-menu"
                        style={{
                          display: openSubMenus[index]
                            ? "block"
                            : "none",
                        }}
                      >
                        {link.subMenu.map((subLink) => (
                          <li key={subLink.path}>
                            <Link to={subLink.path}>
                              {subLink.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
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
