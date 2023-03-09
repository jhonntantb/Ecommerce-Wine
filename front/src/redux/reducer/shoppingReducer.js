import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from '../types';

const initialState = {
  cart: [],
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = action.payload;
      let itemCart = state.cart.find((item) => item._id === newItem._id);
      console.log('reducer', newItem, itemCart);

      return itemCart
        ? {
            cart: state.cart.map((item) =>
              item._id === newItem._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item._id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            cart: state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            cart: state.cart.filter((item) => item._id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default shoppingReducer;
