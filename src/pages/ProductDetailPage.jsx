import React, { useState } from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import useFetchItem from "../hooks/useFetchItem";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productID } = useParams();
  const product = useFetchItem(productID);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="py-10 text-gray-500 text-center">Loading...</div>;
  }

  const {
    id = "",
    title = "",
    description = "",
    category = "",
    price = "",
    discountPercentage = "",
    rating = "",
    stock = "",
    tags = "",
    brand = "",
    sku = "",
    weight = "",
    dimensions = "",
    warrantyInformation = "",
    shippingInformation = "",
    availabilityStatus = "",
    reviews = [],
    returnPolicy = "",
    minimumOrderQuantity = "",
    meta = "",
    images = [],
    thumbnail = "",
  } = product;

  const handleAddToCart = () => {
    console.log("Added to cart:", { ...product, quantity });
  };

  if (!product) {
    return <div className="py-10 text-gray-500 text-center">Loading...</div>;
  }

  return (
    <div className="gap-10 grid grid-cols-1 lg:grid-cols-2 mx-auto p-4 md:p-8 max-w-7xl">
      {/* Left: Product Images */}
      <div className="space-y-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="shadow-lg rounded-2xl w-full h-[450px] object-cover"
        />
        <div className="flex gap-3">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="border rounded-xl hover:ring-2 hover:ring-blue-500 w-20 h-20 object-cover transition"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="space-y-5">
        <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
          {product.title}
        </h1>

        {/* Rating & Stock */}
        <div className="flex items-center gap-3">
          <div className="flex text-yellow-500">
            {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-gray-600 text-sm">{product.rating} / 5</span>
          <span className="bg-green-100 px-2 py-0.5 rounded-full font-medium text-green-700 text-xs">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <p className="font-bold text-blue-700 text-2xl">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-500 text-sm line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2,
            )}
          </p>
          <span className="bg-red-100 px-2 py-0.5 rounded-full font-semibold text-red-600 text-xs">
            -{product.discountPercentage.toFixed(0)}%
          </span>
        </div>

        {/* Short Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Quantity Selector & Add to Cart */}
        <div className="flex items-center gap-3">
          <label htmlFor="quantity" className="font-medium text-sm">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-16 text-center"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-md mt-2 px-6 py-2 rounded-full text-white transition"
        >
          <FaCartPlus />
          Add to Cart
        </button>

        {/* Product Details */}
        <div className="gap-4 grid grid-cols-2 mt-4 text-gray-600 text-sm">
          <div>
            <p className="font-medium">Category:</p>
            <p>{product.category}</p>
          </div>
          <div>
            <p className="font-medium">Brand:</p>
            <p>{product.brand}</p>
          </div>
          <div>
            <p className="font-medium">SKU:</p>
            <p>{product.sku}</p>
          </div>
          <div>
            <p className="font-medium">Warranty:</p>
            <p>{product.warrantyInformation}</p>
          </div>
          <div>
            <p className="font-medium">Shipping:</p>
            <p>{product.shippingInformation}</p>
          </div>
          <div>
            <p className="font-medium">Return Policy:</p>
            <p>{product.returnPolicy}</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h2 className="mb-2 font-semibold text-gray-800 text-lg">Reviews</h2>
          <div className="space-y-2">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-sm p-3 border rounded-xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{review.reviewerName}</span>
                  <div className="flex text-yellow-500 text-xs">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
