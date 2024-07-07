import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/product_card";
import { BrowserRouter } from "react-router-dom";
import CartPage from "./components/cartPage";
import { Routes, Route, Outlet, Link, useParams, useSearchParams } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <ProductCard />
      </div>
    </BrowserRouter>
  );
}

export default App;
