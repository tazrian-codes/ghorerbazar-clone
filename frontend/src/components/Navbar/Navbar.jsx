import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSearch,
  faUser,
  faCartShopping,
  faTableCellsLarge,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-head">
          <span className="nav-texts">
            আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:
            <FontAwesomeIcon icon={faPhone} />
            +8801321208940 | হট লাইন: 09642-922922
          </span>
        </div>

        <div className="nav-contents">
          {/* mobile view */}
          <div
            className={`mobile-nav-left nav-icon nav-icon-mobile ${sideBar ? "hideBtn" : "showBtn"}`}
            onClick={() => setSideBar(true)}
          >
            ☰
          </div>
          <div
            className={`mobile-nav-left nav-icon nav-icon-mobile ${sideBar ? "showBtn" : "hideBtn"}`}
            onClick={() => setSideBar(false)}
          >
            X
          </div>

          <div className="wrapper">
            <FontAwesomeIcon icon={faSearch} className="nav-icon nav-icon-pc" />
            <p className="tool-tip tool-tip-search">Search</p>
          </div>

          <img src="/src/assets/GhorerBazar_assets/logo.webp" alt="" />

          <div className="nav-contents-right">
            <FontAwesomeIcon
              icon={faSearch}
              className="nav-icon nav-icon-mobile"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="nav-icon nav-icon-mobile"
            />
            <div className="wrapper">
              <FontAwesomeIcon icon={faUser} className="nav-icon nav-icon-pc" />
              <p className="tool-tip tool-tip-acc">Account</p>
            </div>
            <div className="wrapper">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="nav-icon nav-icon-pc"
              />
              <p className="tool-tip tool-tip-cart">Cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* desktop view */}
      <div className={`nav-opts-bg ${sideBar ? "showOverlay" : "hideOverlay"}`}>
        <div className={`nav-opts ${sideBar ? "showSideBar" : "hideSideBar"}`}>
          <ul>
            <li>OFFER ZONE</li>
            <li>Best Seller</li>
            <li>Oil </li>
            <li>Ghee (ঘি)</li>
            <li>Dates (খেজুর)</li>
            <li>খেজুর গুড়</li>
            <li>Honey</li>
            <li>Masala</li>
            <li>Nuts & Seeds</li>
            <li>Tea/Coffee</li>
            <li>Honeycomb</li>
            <li>Organic Zone</li>
            <li>Pickle</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
