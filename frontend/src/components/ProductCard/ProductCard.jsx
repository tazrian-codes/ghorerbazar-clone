import React, { useContext } from 'react'
import './ProductCard.css'
import { StoreContext } from '../Context/Context';

const ProductCard = ({item}) => {
  const { addToCart, setIsCartOpen } = useContext(StoreContext);
  const handleClick = (id) => {
        addToCart(id)

        setTimeout(() => {
          setIsCartOpen(true)
        }, 1000)
      }
  return (
    <div className="product-card">
      <div className="product-img-div">
        <img src={item.image} className="product-item-image" />
        <span className="on-sale">on sale</span>
      </div>
      <div className="product-details">
        <p>{item.name}</p>
      <p>Tk {item.price}.00</p>
      <div className="product-button-div">
        <button onClick={() => handleClick(item._id)}>Quick Add</button>
      </div>
      </div>
    </div>
  )
}

export default ProductCard