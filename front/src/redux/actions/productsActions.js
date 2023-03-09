import { GET_PRODUCTS, GET_PRODUCTS_INFO } from '../types';

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      return dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function getProductInfo(id) {
  return async function (dispatch) {
    try {
      const res = await fetch('http://localhost:5000/api/products/' + id);
      const data = await res.json();
      return dispatch({
        type: GET_PRODUCTS_INFO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
