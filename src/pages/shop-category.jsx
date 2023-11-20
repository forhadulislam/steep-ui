import React, {useContext, useState} from "react";
import "./css/shopCategory.css";
import ShopContextProvider, {ShopContext} from "../context/context";
import perfumeProducts from "../components/assets/perfumeProducts";
import newCollections from "../components/assets/newCollections";

const ShopCategory = (props) => {
    const all_products = perfumeProducts.concat(newCollections);
    return (
        <div className='shop-category'>
            <img src={props.banner}  alt={""} height={"400px"}/>
            <h1>Shop Category: {props.category}</h1>
            <div className='shop-category-indexsort'>
                <p>
                    <span>Showing 1–12</span> of 53 results
                </p>
                <div className='shop-category-indexsort-sort'>
                    <p>Sort by popularity</p>
                </div>
                <div className='shop-category-products'>
                    {
                        all_products.map((item) => {
                            return (
                                <div className='shop-category-products-item'>
                                    <img src={item.imageLink} alt={""} />
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ShopCategory;