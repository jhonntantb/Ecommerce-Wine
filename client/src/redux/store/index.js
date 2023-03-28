/*import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;*/

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducer/productsSlice';
import shoppingReducer from '../reducer/shoppingSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: shoppingReducer,
  },
});
