import {Route, Routes} from "react-router-dom";
import Cart from "../../pages/cart";
import Shop from "../../pages/shop";
import Product from "../../pages/product";
import ShopCategory from "../../pages/shop-category";
import React from "react";
import LoginSignup from "../../pages/login-signup";
import Scraping from "../../pages/scraping";


const AppRoutes = () => {
    const menPerfume = "https://images.pexels.com/photos/5669252/pexels-photo-5669252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    const womenPerfume = "https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/men" element={<ShopCategory banner={menPerfume} category={"men"} />} />
            <Route path="/women" element={<ShopCategory banner={womenPerfume} category={"women"} />} />
            <Route path="/scrap" element={<Scraping />} />
            <Route path="/login" element={<LoginSignup />} />
        </Routes>
    );
}

export default AppRoutes;