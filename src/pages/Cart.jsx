import React, { useState } from 'react';
import CartItem from '../components/CartItem';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 99,
      description: 'High-quality wireless sound and comfortable design.',
      thumbnail: 'https://dummyimage.com/300x300/000/fff&text=Headphones',
      quantity: 1,
    },
    {
      id: 2,
      title: 'Smartwatch',
      price: 149,
      description: 'Track your fitness and stay connected on the go.',
      thumbnail: 'https://dummyimage.com/300x300/000/fff&text=Smartwatch',
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto px-4 py-8 container">
      {/* Cart items */}
      <div className="lg:col-span-2">
        <h2 className="mb-4 font-bold text-2xl">Shopping Cart</h2>
        <div className="bg-white shadow p-4 rounded">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              product={item}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
      </div>

      {/* Order summary */}
      <div className="bg-white shadow p-6 rounded">
        <h3 className="mb-4 font-semibold text-xl">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between pt-2 border-t font-bold text-lg">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 mt-4 py-2 rounded w-full text-white transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
