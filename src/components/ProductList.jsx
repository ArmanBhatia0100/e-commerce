import React from 'react';
import ProductCard from './productCard/ProductCard';


function ProductList() {
  const products = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 99,
      description: 'High-quality wireless sound and comfortable design.',
      thumbnail: 'https://dummyimage.com/300x300/000/fff&text=Headphones',
    },
    {
      id: 2,
      title: 'Smartwatch',
      price: 149,
      description: 'Track your fitness and stay connected on the go.',
      thumbnail: 'https://dummyimage.com/300x300/000/fff&text=Smartwatch',
    },
    {
      id: 3,
      title: 'Gaming Mouse',
      price: 59,
      description: 'Precision control and ergonomic design for gamers.',
      thumbnail: 'https://dummyimage.com/300x300/000/fff&text=Mouse',
    },
    {
      id: 4,
      title: 'Bluetooth Speaker',
      price: 79,
      description: 'Portable and powerful sound with long battery life.',
      thumbnail: 'https://dummyimage.com/300x300/000/fff&text=Speaker',
    },
    // Add more products as needed
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Later: add logic to update cart
  };

  return (
    <div className="mx-auto px-4 py-8 container">
      <h2 className="mb-6 font-bold text-2xl">Our Products</h2>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
