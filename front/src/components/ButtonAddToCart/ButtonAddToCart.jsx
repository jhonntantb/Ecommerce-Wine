import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/shoppingActions';
import './ButtonAddToCart.css';

const ButtonAddToCart = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addToCart(data))}
      disabled={!data?.countInStock}
      className='btn'
    >
      Add item to cart
    </button>
  );
};

export default ButtonAddToCart;
