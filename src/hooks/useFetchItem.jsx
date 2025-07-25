import React, { useEffect, useState } from "react";

function useFetchItem(productID) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch("https://dummyjson.com/product/"+ productID);
      const data = await res.json();
      setProduct(data);
    }
    getProduct();
  }, []);
  return product;
}

export default useFetchItem;
