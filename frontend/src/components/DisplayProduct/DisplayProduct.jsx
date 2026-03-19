import React, { useContext, useEffect } from "react";
import "./DisplayProduct.css";
import { food_list } from "../../assets/GhorerBazar_assets/assets";
import { StoreContext } from "../Context/Context";

const DisplayProduct = () => {
  const { addToCart, removeFromCart, isCartOpen, setIsCartOpen } = useContext(StoreContext);
    useEffect(() => {
        document.body.style.overflow = isCartOpen ? "hidden" : "auto";
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isCartOpen]);

      const handleClick = (id) => {
        addToCart(id)

        setTimeout(() => {
          setIsCartOpen(true)
        }, 1000)
      }
  return (
    <div className="display-product">
      <h2>ALL PRODUCT</h2>
      <div className="display-product-items">
        {food_list.map((item, index) => {
          return (
            <div key={item._id} className="product-item">
              <div className="img-div">
                <img src={item.image} className="item-image" />
                <span className="on-sale">on sale</span>
              </div>
              <p>{item.name}</p>
              <p>Tk {item.price}.00</p>
              <div className="button-div">
                <button onClick={() => handleClick(item._id)}>Quick Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProduct;
