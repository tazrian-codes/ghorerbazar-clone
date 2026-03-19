import React, { useContext } from 'react'
import './CartFoodUI.css'
import { StoreContext } from '../Context/Context'
import { food_list } from '../../assets/GhorerBazar_assets/assets'


const CartFoodUI = () => {
  const { cartItems, setCartItems, addToCart, removeFromCart, removeAtOnce } = useContext(StoreContext)
  return (
    <div className='cart-food-ui'>
      {Object.entries(cartItems).map(([id, quantity]) => {
        const item = food_list.find((item) => item._id === id)
        return (
          <div key={item._id} className="cart-food-div">
            <div className="food-img">
              <img src={item.image} alt="" />
            </div>
            <div className="food-des">
              <p>{item.name}</p>
              <p>Tk {item.price}</p>
              <div className="item-count-remove">
                <div className="span-div">
                  <span onClick={() => removeFromCart(item._id)} className='remove'>-</span>
                  <span contentEditable='true' className='quantity'>{quantity}</span>
                  <span onClick={() => addToCart(item._id)} className='add'>+</span>
                </div>
                <div onClick={() => removeAtOnce(item._id)} className="remove-div">
                  Remove
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CartFoodUI