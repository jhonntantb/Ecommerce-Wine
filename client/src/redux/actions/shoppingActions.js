import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from '../reducer/shoppingSlice';

export const addToCart = (product) => (dispatch) =>
  dispatch(ADD_TO_CART(product));

export const delFromCart =
  (_id, all = false) =>
  (dispatch) =>
    all
      ? dispatch(REMOVE_ALL_FROM_CART(_id))
      : dispatch(REMOVE_ONE_FROM_CART(_id));

export const clearCart = () => (dispatch) => dispatch(CLEAR_CART());
