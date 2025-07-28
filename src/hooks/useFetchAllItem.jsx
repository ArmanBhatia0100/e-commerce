import { useEffect, use } from "react";
import { ProductContext } from "../context/ProductContext";

function useFetchAllItem() {
  // Get the context from the product context
  const context = use(ProductContext);

  // Fetching and storing products in context
  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      //   Setting the prodcust list to the context using updator function
      context.setProductList(data.products);
      context.setProductFilteredList(data.products);
    })();
  }, []);
}

export default useFetchAllItem;
