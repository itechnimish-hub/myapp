import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const exist = state.cartItems.find(
                item => item.id === product.id
            );

            if (exist) {
                exist.quantity += 1;
            } else {
                state.cartItems.push({
                    ...product,
                    quantity: 1,
                });
            }

            state.totalQuantity += 1;
            state.totalPrice += product.price;
        },

        increaseQty: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            item.quantity++;
            state.totalQuantity++;
            state.totalPrice += item.price;
        },

        decreaseQty: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item.quantity > 1) {
                item.quantity--;
                state.totalQuantity--;
                state.totalPrice -= item.price;
            }
        },

        removeItem: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.price * item.quantity;

                state.cartItems = state.cartItems.filter(
                    p => p.id !== action.payload
                );
            }
        },
    },
});

export const {
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
