import { createContext, useState } from "react";

const CartContext = createContext(null);

import React from "react";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(cartItem, qty = 1) {
    setCartItems((prev) => {
      const existingProduct = prev.find((product) => product.id === cartItem.id);
      if (existingProduct) {
        // Update quantity if product exists
        return prev.map((product) =>
          product.id === cartItem.id
            ? { ...product, qty: product.qty + qty }
            : product
        );
      } else {
        // Add new product if it doesn't exist
        return [...prev, { ...cartItem, qty }];
      }
    });
  }


  function deleteFromCart(productID) {
    setCartItems((prev) => {
      return prev.filter((product) => product.id != productID);
    });
  }

  const cartContextItems = {
    cartItems,
    addToCart,
    deleteFromCart,
  };

  return (
    <CartContext.Provider value={cartContextItems}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
