import { createSlice } from '@reduxjs/toolkit';

export const shoppingSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    ADD_TO_CART: (state, action) => {
      let newItem = action.payload;
      let itemCart = state.cart.find((item) => item.id === newItem.id);

      itemCart
        ? (state.cart = state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ))
        : (state.cart = [...state.cart, { ...newItem, quantity: 1 }]);
    },
    REMOVE_ONE_FROM_CART: (state, action) => {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      itemToDelete.quantity > 1
        ? (state.cart = state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ))
        : (state.cart = state.cart.filter(
            (item) => item.id !== action.payload
          ));
    },
    REMOVE_ALL_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    CLEAR_CART: (state) => {
      state.cart = [];
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
