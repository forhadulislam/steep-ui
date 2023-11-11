import React from "react";
import Hero from "../components/hero/hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import Collections from "../components/newcollections/collections";
import Newsletter from "../components/newsletter/newsletter";

const Shop = () => {
    return (
        <div className='shop'>
            <Hero />
            <Popular />
            <Offers />
            <Collections />
            <Newsletter />
        </div>
    );
}

export default Shop;