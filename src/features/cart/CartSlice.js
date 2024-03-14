import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    tax: 0,
    shipping: 500,
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
            cartSlice.caseReducers.calculateTotal(state);

            toast.success("Item added to your cart!");
        },

        clearCart: (state, action) => {
            localStorage.setItem("cart", JSON.stringify(initialState));
            return initialState;
        },

        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const removedProduct = state.cartItems.find(
                (item) => item.cartID === cartID
            );

            state.cartItems = state.cartItems.filter(
                (item) => item.cartID !== cartID
            );
            state.numItemsInCart -= removedProduct.amount;
            state.cartTotal -= removedProduct.price * removedProduct.amount;

            cartSlice.caseReducers.calculateTotal(state);
            toast.error("Item removed from your cart!");
        },

        editItem: (state, action) => {
            console.log(action.payload);

            const { cartID, amount } = action.payload;

            const editedItem = state.cartItems.find(
                (item) => item.cartID === cartID
            );

            state.numItemsInCart += amount - editedItem.amount;
            state.cartTotal += editedItem.price * (amount - editedItem.amount);
            editedItem.amount = amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.success("Item updated");
        },
        calculateTotal: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const { clearCart, removeItem, editItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
