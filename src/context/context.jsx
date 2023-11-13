import React, { createContext } from "react";
import perfumeProducts from "../components/assets/perfumeProducts";
import newCollections from "../components/assets/newCollections";


export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    let merged_data = perfumeProducts.concat(newCollections);
    const contextValue = {merged_data};

    console.log(contextValue);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

