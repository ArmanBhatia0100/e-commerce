import { Children, createContext, useState } from "react";

const ProductContext = createContext(null);

function ProductProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [productFilteredList, setProductFilteredList] = useState([]);

  function searchProductByName(name) {
    const searchedProducts = productList.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase()),
    );
    setProductFilteredList(searchedProducts)
  }

  const contextItems = {
    productList,
    setProductList,
    productFilteredList,
    setProductFilteredList,
    searchProductByName,
  };

  return (
    <ProductContext.Provider value={contextItems}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
