import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 10,
  }

const counterSlice= createSlice({
    name: 'mycounter',
    initialState,

    reducers: {

        doIncrement : (state , action) => {

             state.value = state.value + action.payload;
            // if (action.type === "increment")
            // {  console.log("increment called");
            //     return  state.value + action.payload
            // }
            // else if (action.type === "decrement"){
            //     console.log("decrement called");
            //     return state.value -action.payload ;
            // }
            // return state;
    
        },

    }
    

});

export const {doIncrement} = counterSlice.actions;
export default counterSlice.reducer;
