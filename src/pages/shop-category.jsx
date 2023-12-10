import React, {useContext, useState} from "react";
import "./css/shopCategory.css";
import perfumeProducts from "../components/assets/perfumeProducts";
import newCollections from "../components/assets/newCollections";
import Item from "../components/items/item";

const ShopCategory = (props) => {
    const all_products = perfumeProducts.concat(newCollections);
    return (
        <div className='shop-category'>
            <img className={"shop-category-banner"} src={props.banner}  alt={""} height={"400px"}/>
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
                        all_products.map((item, i) => {
                            if (item.category === props.category) {
                                return (
                                    <Item key={i} id={item.id} name={item.name} image={item.imageLink} new_price={item.newPrice} old_price={item.oldPrice}  />
                                );
                            }else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ShopCategory;