'use client'
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter/counterSlice';
import productReducer from './Product/productSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;