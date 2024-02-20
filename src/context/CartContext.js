import React, { useContext, useState } from 'react'

const CartContext = React.createContext();

export  function useCart(){ 
     return   useContext(CartContext);
}

export function CartProvider({children}) {
 const [cart, setCart] =  useState([]);

 
const addToCart= (prod)=> {

  if (cart.some(item => item.id === prod.id)) {
          setCart(cart => cart.map(item => item.id === prod.id  ? { ...item, qty: item.qty +1} : item ));
        } 
      else { prod.qty= 1;  setCart(cart => [...cart, prod]); } 

      console.log(cart);
}


const UpdateCartItemQty = (prod,qty)=>{
   setCart(cart => cart.map(item => item.id === prod.id  ? { ...item, qty: qty } : item ));
}

const removeFromCart = (id)=>{
  setCart( cart.filter( item => item.id !==id))
}


const clearCart = ()=>{
  setCart([]);
}

  return (
    <CartContext.Provider value={{cart, setCart, addToCart, UpdateCartItemQty, removeFromCart, clearCart}}>{children}</CartContext.Provider> 
  )
}
