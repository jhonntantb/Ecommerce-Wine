import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  delFromCart,
  clearCart,
} from '../../redux/actions/shoppingActions';
import { FiTrash2 } from 'react-icons/fi';
import './ShoppingCart.css';
import { getProducts } from '../../redux/actions/productsActions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className='cart'>
      <h3>Selected Products</h3>
      <table className='shopping'>
        <thead className='thead'>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>
              <button
                className='btn-clean'
                onClick={() => dispatch(clearCart())}
              >
                Clean Cart
              </button>
            </th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {cart.map((el, index) => (
            <tr key={index}>
              <td className='img-name'>
                <img
                  className='img-cart'
                  src={`${el.url_image}`}
                  alt=''
                />
                <p>{el.name}</p>
              </td>
              <td>
                <button
                  className='btn-quantity'
                  onClick={() => dispatch(delFromCart(el.id))}
                >
                  -
                </button>
                {el.quantity}
                <button
                  className='btn-quantity'
                  onClick={() => dispatch(addToCart(el.id))}
                >
                  +
                </button>
              </td>
              <td>{(el.price * el.quantity).toFixed(2)}</td>
              <td>
                <FiTrash2
                  className='trash'
                  onClick={() => dispatch(delFromCart(el.id, true))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
