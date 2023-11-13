import React, {useContext, useState} from "react";
import "./css/shopCategory.css";
import ShopContextProvider, {ShopContext} from "../context/context";

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
   //  console.log(ShopContextProvider.params)
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
                                    <img src={item.image} alt={""} />
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