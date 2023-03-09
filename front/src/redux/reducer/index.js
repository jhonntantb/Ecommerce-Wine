import { combineReducers } from 'redux';
import productReducer from './productsReducer';
import shoppingReducer from './shoppingReducer';
const reducer = combineReducers({
  products: productReducer,
  cart: shoppingReducer,
});

export default reducer;
