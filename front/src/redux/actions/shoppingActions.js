import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from '../types';

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });

export const delFromCart = (_id, all = false) =>
  all
    ? { type: REMOVE_ONE_FROM_CART, payload: _id }
    : { type: REMOVE_ALL_FROM_CART, payload: _id };

export const clearCart = () => ({ type: CLEAR_CART });
