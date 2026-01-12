import { configureStore } from "@reduxjs/toolkit";

import mycounterReducer from './redux/counterSlice';

import cartReducer      from './redux/cartSlice';
import productReducer   from './redux/productSlice';
import orderReducer     from './redux/orderSlice';

const store = configureStore({
    reducer: {
      todo: mycounterReducer,
      products : productReducer,
      cart: cartReducer,
      order: orderReducer

    },
  });

  export default store;