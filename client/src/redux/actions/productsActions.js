import { GET_PRODUCTS, GET_PRODUCTS_INFO } from '../reducer/productsSlice';

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      return dispatch(GET_PRODUCTS(data));
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

      return dispatch(GET_PRODUCTS_INFO(data));
    } catch (error) {
      console.log(error);
    }
  };
}
