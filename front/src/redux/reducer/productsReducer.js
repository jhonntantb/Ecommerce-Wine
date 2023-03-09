import { GET_PRODUCTS, GET_PRODUCTS_INFO } from '../types';

const initialState = {
  products: [],
  productinfo: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_INFO:
      return {
        ...state,
        productInfo: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
