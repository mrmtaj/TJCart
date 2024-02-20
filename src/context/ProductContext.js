import React, { useContext, useReducer } from 'react'
import { productReducer } from '../redux/productReducer';

const ProductContext = React.createContext();



export function ProductProvider({children}) {
        
    const [productFilter, productFilterDispatch]  = useReducer(productReducer,{
        sort: "",
        searchQry: ""
    });

  return (
         <ProductContext.Provider value={{productFilter, productFilterDispatch}}>{children}</ProductContext.Provider> 
         )
}


export  function useProductFilter(){ 
    return   useContext(ProductContext);
}

