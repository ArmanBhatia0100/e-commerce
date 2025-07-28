import { createContext, useState } from "react";

const CartContext = createContext(null);

import React from "react";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(cartItem) {
    setCartItems((prev) => [...prev, cartItem]);
  }

  function deleteFromCart(productID) {
    setCartItems((prev) => {
      return prev.filter((product) => product.id != productID);
    });
  }

  console.log(cartItems);
  const cartContextItems = {
    cartItems,
    addToCart,
    deleteFromCart
  };

  return (
    <CartContext.Provider value={cartContextItems}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
