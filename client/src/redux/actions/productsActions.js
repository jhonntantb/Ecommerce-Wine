import { GET_PRODUCTS, GET_PRODUCTS_INFO } from '../reducer/productsSlice';
import { URL } from '../../api';

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const res = await fetch(`${URL}/products`);
      const data = await res.json();
      return dispatch(GET_PRODUCTS(data.results));
    } catch (error) {
      console.log(error);
    }
  };
};
export function getProductInfo(id) {
  return async function (dispatch) {
    try {
      const res = await fetch(`${URL}/products/${id}`);
      const data = await res.json();
      return dispatch(GET_PRODUCTS_INFO(data));
    } catch (error) {
      console.log(error);
    }
  };
}
