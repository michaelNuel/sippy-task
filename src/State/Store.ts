'use client'
import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from './Counter/counterSlice';
import productReducer from './Product/productSlice'
import cartReducer from './Cart/cartSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer,
        cart: cartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;