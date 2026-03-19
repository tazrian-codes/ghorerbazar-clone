import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavContext } from "../NavContext/NavContext";
import { StoreContext } from "../Context/Context";


const Navbar = () => {

  const { sideBar, setSideBar } = useContext(NavContext);
  const { setIsCartOpen } = useContext(StoreContext);

  const [searchBarOpen, setSearchBarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sideBar ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBar]);

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

          {/* mobile menu button */}

          <div
            className={`mobile-nav-left nav-icon nav-icon-mobile ${
              sideBar ? "hideBtn" : "showBtn"
            }`}
            onClick={() => setSideBar(true)}
          >
            ☰
          </div>

          <div
            className={`mobile-nav-left nav-icon nav-icon-mobile ${
              sideBar ? "showBtn" : "hideBtn"
            }`}
            onClick={() => setSideBar(false)}
          >
            X
          </div>

         <div className="wrapper">
            <FontAwesomeIcon icon={faSearch} className="nav-icon nav-icon-pc" onClick={() => setSearchBarOpen(true)} />
            <p className="tool-tip tool-tip-search">Search</p>
          </div>

          <img src="/src/assets/GhorerBazar_assets/logo.webp" alt="" />

          <div className="nav-contents-right">

            <FontAwesomeIcon
              icon={faSearch}
              className="nav-icon nav-icon-mobile"
              onClick={() => setSearchBarOpen(true)}
            />

            <FontAwesomeIcon
              icon={faCartShopping}
              className="nav-icon nav-icon-mobile"
            />

            <div className="wrapper">
              <Link to={'/sign_in'}><FontAwesomeIcon icon={faUser} className="nav-icon nav-icon-pc" /></Link>
              <p className="tool-tip tool-tip-acc">Account</p>
            </div>
            <div onClick={() => setIsCartOpen(true)} className="wrapper">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="nav-icon nav-icon-pc"
              />
              <p className="tool-tip tool-tip-cart">Cart</p>
            </div>

          </div>

        </div>

      </div>
       <div onClick={() => setSearchBarOpen(false)} className={`search-div-bg ${searchBarOpen ? 'show-search-div-bg' : ''}`}>
        <div onClick={(e) => e.stopPropagation()} className={`search-div-main ${searchBarOpen ? 'show-search-div-main' : ''}`}>
          <div className="search-head">
            <img src="/src/assets/GhorerBazar_assets/logo.webp" alt="" />

            <div className="search-box">
              <input type="text" placeholder='Search products' />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <div className="popular-search-div">
                <p>Popular Searches:</p>
                <div className="popular-search-opts">
                  <p>Organic Oil</p>
                  <p>Honey</p>
                  <p>Nuts and seeds</p>
                </div>
              </div>
            </div>
            
            <div className="search-head-right">
              <Link to={'/sign_in'}><FontAwesomeIcon icon={faUser} /></Link>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </div> 
      </div>
      <div className={`search-div-main-mobile ${searchBarOpen ? 'show-search-div-main-mobile' : ''}`}>
          <div className="search-head-mobile">
            <p>Search our store</p>
            <p className='close-icon' onClick={() => setSearchBarOpen(false)}>x</p>
          </div>

          <div className="search-box-mobile">
            <input type="text" placeholder='Search products' />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>

          <div className="popular-search-div-mobile">
            <p>Popular Searches:</p>
            <div className="popular-search-opts-mobile">
              <p>Organic Oil</p>
              <p>Honey</p>
              <p>Nuts and seeds</p>
            </div>
          </div>
        </div>    

    </div>
  );
};

export default Navbar;