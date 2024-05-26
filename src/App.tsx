import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/product_card";
function App() {
  return (
    <div>
      <Navbar />
      <ProductCard />
    </div>
  );
}

export default App;
