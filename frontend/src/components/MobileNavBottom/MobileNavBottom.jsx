import React from 'react'
import "./MobileNavBottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faTableCellsLarge,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const MobileNavBottom = () => {
  return (
    <div className="content">
    <div className="mobile-nav-bottom">
        <FontAwesomeIcon icon={faHouse} className='mobile-nav-bottom-icons border-icons' />
        <FontAwesomeIcon icon={faTableCellsLarge} className='mobile-nav-bottom-icons border-icons' />
        <FontAwesomeIcon icon={faCartShopping} className='mobile-nav-bottom-icons border-icons' />
        <FontAwesomeIcon icon={faSearch} className='mobile-nav-bottom-icons' /> 
      </div>
      </div>
  )
}

export default MobileNavBottom