import React, { useContext, useState, useEffect } from "react";
import "./CartUI.css";
import { StoreContext } from "../Context/Context";
import CartFoodUI from "../CartFoodUI/CartFoodUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faPencil,
  faSdCard,
  faShoppingCart,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const CartUI = () => {
  const { isCartOpen, setIsCartOpen } = useContext(StoreContext);
  const [showMsg, setShowMsg] = useState(false);
  const [shake, setShake] = useState(true)

  useEffect(() => {
    if (isCartOpen ) {
      setShowMsg(true)

      const timer = setTimeout(() => {
        setShowMsg(false)
      }, 2000)
    
    return () => {
      clearTimeout(timer)
      }
    }
  }, [isCartOpen])

  useEffect(() => {
    if (!isCartOpen) return
    const intervalId = setInterval(() => {
      setShake(true);

    setTimeout(() => {
      setShake(false)
    }, 400)

    }, 3000)

    return () => clearInterval(intervalId)
  }, [isCartOpen])
  
  return (
    <div className={`cart-bg ${isCartOpen ? "cart-bg-open" : "cart-bg-close"}`}>
      <div className={`cart ${isCartOpen ? "cart-open" : ""}`}>
        <div className="cart-main">
          <div className="cart-head">
            <h4>Shopping Cart</h4>
            <div className="cross-icon" onClick={() => setIsCartOpen(false)}>
              x
            </div>
          </div>
          <div className="cart-body">
            {
              showMsg && (<div className="product-added">
              <FontAwesomeIcon icon={faSmile} className="smile" />
              <span>Product added to cart successfully.</span>
            </div>)
            }
            <CartFoodUI />
          </div>
        </div>
        <div className="cart-bottom">
          <div className="cart-bottom-first-part">
            <div className="note">
              <FontAwesomeIcon icon={faPencil} />
              <p>Note</p>
            </div>
            <hr />
            <div className="coupon">
              <FontAwesomeIcon icon={faSdCard} />
              <p>Coupon</p>
            </div>
          </div>
          <div className="subtotal">
            <span>Subtotal</span>
            <span></span>
          </div>
          <div className="cart-bottom-second-part">
            <div className="payment">
              <FontAwesomeIcon icon={faCreditCard} />
              <span>Pay Online</span>
            </div>
            <div className={`cod ${shake ? 'shake-div' : ''}`}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>ক্যাশ অন ডেলিভারিতে অর্ডার করুন</span>
            </div>
            <p className="view-cart">View Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUI;
