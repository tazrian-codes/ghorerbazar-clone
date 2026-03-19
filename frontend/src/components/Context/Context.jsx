import { createContext, useState } from "react";


export const StoreContext = createContext({});

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({})

  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (itemId) => {
    if(!cartItems[itemId]) {
      setCartItems((prev) => ({...prev, [itemId]:1}))
    }
    else{
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }
  } 

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] === 1) {
        const updatedCart = {...prev}
        delete updatedCart[itemId]
        return updatedCart
      }

      return {
        ...prev, [itemId]: prev[itemId] - 1
      }
    })
  }

  const removeAtOnce = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {...prev}
      delete updatedCart[itemId]
      return updatedCart
    })
  }

  return (
    <StoreContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        removeAtOnce
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider