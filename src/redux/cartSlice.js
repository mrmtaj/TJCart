import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        cart: []
    },

    reducers : {

                addToCart : (state, action) => {
                
                    const existingIndex = state.cart.findIndex((item) => item.id === action.payload.id);

                    if (existingIndex >= 0)  { 
                        state.cart[existingIndex] = {...state.cart[existingIndex], qty: state.cart[existingIndex].qty + 1}
                        }
                    else {let xprod = { ...action.payload, qty: 1 };
                        state.cart.push(xprod);
                    }
                },

            
                updateCartItem : (state,action)=>{
                    state.cart = state.cart.map(item => item.id === action.payload.id  ? { ...item, qty: action.payload.qty } : item );
                },



                removeFromCart : (state, action)=>{
                    state.cart = state.cart.filter( item => item.id !== action.payload.id)
                },


                clearCart : (state)=>{
                state.cart=[];
                },
        }
})
 export const {addToCart, updateCartItem, removeFromCart, clearCart} = cartSlice.actions ;
export default cartSlice.reducer;