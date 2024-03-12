import { createSlice } from "@reduxjs/toolkit";
import { formatPrice } from "../../utils";

const initialState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    amountTotal: 0,
    tax: 0,
    shipping: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state, action) => {},
        removeItem: (state, action) => {},
        editItem: (state, action) => {},
        addItem: (state, action) => {},
    },
});

export const {clearCart, removeItem, editItem, addItem} = cartSlice.actions;
export default cartSlice.reducer;
