import React from "react";
import "./popular.css";
import perfumeProducts from "../assets/perfumeProducts"
import Item from "../items/item";

const Popular = () => {
      return (
          <div className='popular'>
            <h1>Popular</h1>
            <hr />
            <div className='popular-item'>
                {
                      perfumeProducts.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.imageLink} new_price={item.newPrice} old_price={item.oldPrice}  />

                    })
                }
            </div>
          </div>
      )
}

export default Popular;
