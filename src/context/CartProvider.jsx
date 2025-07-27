import { createContext, useState } from "react";

const CartContext = createContext(null);

import React from "react";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(cartItem) {
    setCartItems((prev) => [...prev, cartItem]);
  }

  console.log(cartItems);
  const cartContextItems = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextItems}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
