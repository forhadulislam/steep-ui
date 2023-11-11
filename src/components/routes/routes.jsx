import {Route, Routes} from "react-router-dom";
import Cart from "../../pages/cart";
import Shop from "../../pages/shop";
import Product from "../../pages/product";
import ShopCategory from "../../pages/shop-category";
import React from "react";
import LoginSignup from "../../pages/login-signup";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/categories" element={<ShopCategory />} />
            <Route path="/login" element={<LoginSignup />} />
        </Routes>
    );
}

export default AppRoutes;