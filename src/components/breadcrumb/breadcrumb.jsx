import React from "react";
import "./breadcrumb.css";

const Breadcrumb = (props) => {
    const {product} = props;
    return (
        <div className='breadrumb'>
            <div className='breadcrumb-container'>
                HOME / SHOP / {product.category.toUpperCase()} / {product.name.toUpperCase()}
            </div>
        </div>
    );
}

export default Breadcrumb;