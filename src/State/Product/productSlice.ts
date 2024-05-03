import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface Product {
    id: number;
    title: string;
    // Add other properties as needed
}

interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
};

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await fetch('https://dummyjson.com/products');
//     if (!response.ok) {
//       throw new Error('Failed to fetch products');
//     }
//     const data = await response.json();
//     return data as Product[];
//   })

export const fetchProducts= createAsyncThunk('products/fetchProducts', () => {
    return axios
      .get('https://fakestoreapi.com/products')
      .then(response => response.data)
  })

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Unknown error'; // Access the error message
            });
    },
});


// export const fetchProducts = createAsyncThunk<Product[], void>(
//     'products/fetchProducts', // Action type prefix
//     async () => {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//             throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         return data as Product[];
//     }
// );



export default productsSlice.reducer;




