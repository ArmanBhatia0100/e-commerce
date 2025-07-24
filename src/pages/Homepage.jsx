import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/banner/MainBanner";
import ProductList from "../components/ProductList";
import CartPage from "./Cart";

function Homepage() {
  return (
    <div>
      {/* header component */}
      <Header></Header>
      {/* main page */}
      <div>
        <MainBanner />
        <ProductList />
      </div>
  
    </div>
  );
}

export default Homepage;
