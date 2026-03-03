import React from "react";
import "./DisplayProduct.css";
import { food_list } from "../../assets/GhorerBazar_assets/assets";

const DisplayProduct = () => {
  return (
    <div className="display-product">
      <h2>ALL PRODUCT</h2>
      <div className="display-product-items">
        {food_list.map((item, index) => {
          return (
            <div key={item._id} className="product-item">
              <img src={item.image} className="item-image" />
              <p>{item.name}</p>
              <p>Tk {item.price}.00</p>
              <div className="button-div">
                <button>Quick Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProduct;
