import React from "react";
import "./productItem.css";

const ProductItem = (props) => {
    const {product} = props;
    return (
        <div className="product-item">
            <div className="product-item-left">
                <img className="product-main-image" src={product.imageLink} alt={product.name} />
            </div>
            <div className="product-item-right">
                <h1>{product.name}</h1>
                <div className="product-item-right-price">
                    <p className="old-price">{product.oldPrice}</p>
                    <p className="new-price">{product.newPrice}</p>
                </div>
                <div className="product-item-right-quantity">
                    <p>Quantity</p>
                    <input type="number" min="1" max="10" defaultValue="1" />
                </div>
                <div className="product-item-right-add">
                    <button>Add to cart</button>
                </div>
                <div className="product-item-right-category">
                    <p>{product.category.toUpperCase()}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;