// cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    title: string;
    price: string;
    image: string;
    cartQuantity: number;
}

interface CartState {
    items: CartItem[];
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const initialState: CartState = {
    items: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].cartQuantity += 1
            } else {

                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.items.push(tempProduct);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

