import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { NavContext } from "../NavContext/NavContext";
import './NavOpts.css'

const NavOpts = () => {

  const { sideBar, setSideBar, isLoggedIn, setIsLoggedIn } = useContext(NavContext);

  return (
    <div className={`nav-opts-bg ${sideBar ? "showOverlay" : "hideOverlay"}`}>
      
      <div className={`nav-opts ${sideBar ? "showSideBar" : ""}`}>

        <ul>

          <li>OFFER ZONE</li>
          <li>Best Seller</li>
          <li>Oil</li>
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

          {isLoggedIn ? (
            <div className="account-section">
              <FontAwesomeIcon icon={faUser} />
              <button
                className="orange-bordered-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="account-section">
              <p>My Account</p>
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
              <button className="orange-bordered-btn">Register</button>
            </div>
          )}

        </ul>

      </div>

    </div>
  );
};

export default NavOpts;