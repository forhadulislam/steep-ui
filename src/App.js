import './App.css';
import Navbar from "./components/navbar/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import ShopCategory from "./pages/shop-category";
import Product from "./pages/product";

function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product" element={<Product />} />
                <Route path="/shop-category" element={<ShopCategory />} />
            </Routes>
        </Router>



    </div>
  );
}

export default App;
