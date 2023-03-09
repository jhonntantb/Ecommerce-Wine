import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import './CartLogo.css';

const CartLogo = () => {
  const state = useSelector((state) => state.cart.cart);
  return (
    <div className='cart-logo'>
      <FiShoppingCart />
      <p>{state.length}</p>
    </div>
  );
};

export default CartLogo;
