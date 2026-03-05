import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-first">
        <div className="footer-first-left">
          <img src="/src/assets/GhorerBazar_assets/logo.webp" alt="" />
          <h4>Ghorer Bazar: Your Trusted Source for Safe & Organic Food</h4>
          <p>Ghorer Bazar is a leading e-commerce platform committed to 
            delivering safe, healthy, and organic food products across 
            Bangladesh. Renowned for its dedication to quality, Ghorer Bazar 
            offers a diverse range of health-focused items, including premium 
            mustard oil, pure ghee, organic honey, dates, chia seeds, and an 
            assortment of nuts. Each product is carefully sourced and crafted 
            to ensure maximum health benefits, meeting the highest standards of 
            purity and freshness. <br /> <br /> With a focus on convenience, Ghorer Bazar operates 
            primarily online, bringing the goodness of nature straight to your doorstep. 
            Whether you're seeking to elevate your wellness journey or simply enjoy natural, 
            wholesome foods, Ghorer Bazar is your go-to destination for authentic, trustworthy 
            products.</p>
        </div>
        <div className="footer-first-right">
          <div className="footer-first-right-one">
            <div className="footer-first-right-one-header">
              <h3 className='colored-heading'>COMPANY</h3>
              <img src="/src/assets/GhorerBazar_assets/up-arrow-outbox-svgrepo-com.png" alt="" />
            </div>
              <span className='underlined-opts'>About Us</span>
              <span className='underlined-opts'>রিটার্ন পলিসি</span> 
              <span className='underlined-opts'>রিফান্ড পলিসি</span>
          </div>
          <div className="footer-first-right-two">
            <div className="footer-first-right-two-header">
              <h3 className='colored-heading'>QUICK HELP</h3>
              <img src="/src/assets/GhorerBazar_assets/up-arrow-outbox-svgrepo-com.png" alt="" />
            </div>
              <span className='underlined-opts'>গ্রাহক সেবা</span>
              <span className='underlined-opts'>Contact</span>
          </div>
          <h3>DBID ID : 437361334</h3>
        </div>
      </div>

      <div className="footer-last">
        <FontAwesomeIcon icon={faFacebook} />
        <p>© ঘরের বাজার 2024</p>
      </div>
    </div>
  )
}

export default Footer