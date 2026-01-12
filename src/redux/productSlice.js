import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
  error: '',
  mcount: 88,
  //sort: '', 
 // searchQry: ''
}


export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  return axios
    .get('https://dummyjson.com/products?limit=300')
    .then(response => response.data)
    .catch((err) => err.message);
})

// export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
//    const response = await fetch('https://dummyjson.com/products?limit=300');
//    const result = response.json();
//   console.log("rep", result);
//      return result;
//   })

const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers : {
        xIncrement : (state, action) => {
          state.mcount = state.mcount + 1;
        },


        setSearchQry: (state, action) => {
          state.searchQry = action.payload;
        },
        setSort: (state, action) => {
          state.sort = action.payload;
        },

    },

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})

export const {xIncrement, setSearchQry, setSort } = productSlice.actions
export default productSlice.reducer