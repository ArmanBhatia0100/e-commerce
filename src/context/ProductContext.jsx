import { Children, createContext, useState } from "react";

const ProductContext = createContext(null);

function ProductProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [productFilteredList, setProductFilteredList] = useState([]);


  const contextItems = {
    productList,
    setProductList,
    productFilteredList,
    setProductFilteredList
  };

  return (
    <ProductContext.Provider value={contextItems}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
