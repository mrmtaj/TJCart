import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerInfo: {
        name: '',
        email: '',
        phone: '',
    },
     billingInfo: {
        address1: '',
        address2: '',
        city: '',
        state:'',
        postalCode: '',
        country: '',
    },
    shippingInfo: {
        address1: '',
        address2: '',
        city: '',
        state:'',
        postalCode: '',
        country: '',
    },
    orderInfo: {
        orderId: '',
        items: [],
        totalAmount: 0,
        shippingAmount: 0,
        netAmount : 0,
        paymentMethod : 'cod',
        comments : '',
    },
};

const orderSlice = createSlice({
    name: 'order',
    initialState,

    reducers: {
        setCustomerInfo: (state, action) => {
            state.customerInfo = action.payload;
        },
        setBillingInfo: (state, action) => {
            state.billingInfo = action.payload;
        },
        setShippingInfo: (state, action) => {
            state.shippingInfo = action.payload;
        },
        setOrderInfo: (state, action) => {
             state.orderInfo = { ...state.orderInfo, ...action.payload };
        },
        addItemToOrder: (state, action) => {
            state.orderInfo.items.push(action.payload);
            state.orderInfo.totalAmount += action.payload.price;
        },
        removeItemFromOrder: (state, action) => {
            const index = state.orderInfo.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.orderInfo.totalAmount -= state.orderInfo.items[index].price;
                state.orderInfo.items.splice(index, 1);
            }
        },
        resetOrder: () => initialState, 
    },
});

export const { setCustomerInfo, setBillingInfo, setShippingInfo, setOrderInfo, addItemToOrder, removeItemFromOrder } = orderSlice.actions;

export default orderSlice.reducer;
