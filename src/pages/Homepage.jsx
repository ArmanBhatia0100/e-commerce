import React from "react";
import MainBanner from "../components/banner/MainBanner";
import ProductList from "../components/ProductList";
import ProductFilters from "../components/ProductFilter";

function Homepage() {

  return (
    <div className="bg-slate-100">
      <MainBanner />
      <ProductFilters />
      <ProductList />
    </div>
  );
}

export default Homepage;
