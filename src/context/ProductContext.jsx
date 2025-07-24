import { Children, createContext, useState } from "react";

const ProductContext = createContext(null);

function ProductProvider({ children }) {
  const [productList, setProductList] = useState(null);

  const contextItems = {
    productList,
    setProductList,
  };

  return (
    <ProductContext.Provider value={contextItems}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
