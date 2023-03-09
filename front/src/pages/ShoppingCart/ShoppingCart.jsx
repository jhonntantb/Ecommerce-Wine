import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  delFromCart,
  clearCart,
} from '../../redux/actions/shoppingActions';
import { FiTrash2 } from 'react-icons/fi';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  console.log('este es el carrito', cart);
  return (
    <div className='cart'>
      <table className='shopping'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>
              <button>Clean Cart</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((el, index) => (
            <tr key={index}>
              <td className='img-name'>
                <img
                  className='img-cart'
                  src={`http://localhost:5000/${el.image}`}
                  alt=''
                />
                <p>{el.name}</p>
              </td>
              <td>
                <button className='btn-quantity'>-</button>
                {el.quantity}
                <button className='btn-quantity'>+</button>
              </td>
              <td>{el.price}</td>
              <td>
                <FiTrash2 />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
