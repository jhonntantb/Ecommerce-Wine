import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productInfo: {},
  },
  reducers: {
    GET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    GET_PRODUCTS_INFO: (state, action) => {
      state.productInfo = action.payload;
    },
  },
});

export const { GET_PRODUCTS, GET_PRODUCTS_INFO } = productsSlice.actions;

export default productsSlice.reducer;
