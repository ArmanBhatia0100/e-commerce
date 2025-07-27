import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CartPage from "./pages/Cart.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<App />} />
              <Route path="cart" element={<CartPage />} />
              <Route
                path="product/:productID"
                element={<ProductDetailPage />}
              />
            </Route>
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
);
