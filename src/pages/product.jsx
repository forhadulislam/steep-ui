import React from "react";
import perfumeProducts from "../components/assets/perfumeProducts";
import newCollections from "../components/assets/newCollections";
import {useParams} from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import ProductItem from "../components/productItem/productItem";


const Product = () => {
    const all_products = perfumeProducts.concat(newCollections);
    const {id} = useParams();
    const product = all_products.find( (e) => e.id === Number(id));
    return (
        <div className='product'>
            <Breadcrumb product={product} />
            <ProductItem product={product} />
        </div>
    );
}

export default Product;