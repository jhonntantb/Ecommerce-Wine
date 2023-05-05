import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from '../reducer/shoppingSlice';
import { URL } from '../../api';

export const addToCart = (id) => async (dispatch) => {
  try {
    const res = await fetch(`${URL}/products/${id}`);
    const data = await res.json();
    return dispatch(ADD_TO_CART(data));
  } catch (error) {
    console.log(error);
  }
};

export const delFromCart =
  (id, all = false) =>
  (dispatch) => {
    const action = all ? REMOVE_ALL_FROM_CART : REMOVE_ONE_FROM_CART;
    return dispatch(action(id));
  };

export const clearCart = () => (dispatch) => dispatch(CLEAR_CART());
