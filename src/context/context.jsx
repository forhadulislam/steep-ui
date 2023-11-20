import React, { createContext } from "react";
import perfumeProducts from "../components/assets/perfumeProducts";
import newCollections from "../components/assets/newCollections";


export const ShopContext = React.createContext(null);
const ShopContextProvider = (props) => {
    let merged_data = perfumeProducts.concat(newCollections);
    const contextValue = {merged_data};

    console.log(contextValue);
    console.log(props.children);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

