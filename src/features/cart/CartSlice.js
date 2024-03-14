import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    tax: 0,
    shipping: 0,
    orderTotal: 0,
};

const getItemsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cart")) || initialState;
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: getItemsFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const itemAdded = state.cartItems.find(
                (item) => item.cartID === product.cartID
            );
            if (itemAdded) {
                itemAdded.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.amount * product.price;
            cartSlice.caseReducers.caculateTotal(state);

            toast.success("Item added to your cart!");
        },

        clearCart: (state, action) => {
            localStorage.setItem("cart", JSON.stringify(initialState));
            return initialState;
        },

        removeItem: (state, action) => {
            const { cardID } = action.payload;
            const removedProduct = state.cartItems.find(
                (item) => item.cardID === cardID
            );
            state.cartItems = state.cartItems.filter(
                (item) => item.cardID !== removedProduct.cardID
            );
            state.numItemsInCart -= removedProduct.amount;
            state.cartTotal -= removeItem.price * removeItem.amount;

            cartSlice.caseReducers.caculateTotal(state);
            toast.error("Item removed from your cart!");
        },

        editItem: (state, action) => {
            const {cartID, amount} = action.payload;
            const editedItem = state.cartItems.find(item => item.cardID === cartID);

            state.numItemsInCart += amount - editItem.amount;
            state.cartTotal += editItem.price * (amount - editItem.amount);
            editItem.amount = amount;
            cartSlice.caseReducers.caculateTotal(state);
            toast.success("Item updated")

        },
        caculateTotal: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const { clearCart, removeItem, editItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
