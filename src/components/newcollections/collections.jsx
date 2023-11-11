import React from "react";
import './collections.css';
import newCollections from "../assets/newCollections";
import Item from "../items/item";

const Collections = () => {
    return (
        <div className='collections'>
            <h1>New Collections</h1>
            <hr />

            <div className='collections-item'>
                {
                    newCollections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.imageLink} new_price={item.newPrice} old_price={item.oldPrice}  />
                    })
                }
            </div>
        </div>
    );
}

export default Collections;
