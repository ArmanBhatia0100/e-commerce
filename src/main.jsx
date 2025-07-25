import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CartPage from "./pages/Cart.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productID" element={<ProductDetailPage />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
