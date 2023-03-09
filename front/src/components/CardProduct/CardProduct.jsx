import React from 'react';
import './CardProduct.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/shoppingActions';
import { NavLink } from 'react-router-dom';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';

const CardProduct = ({ data }) => {
  const dispatch = useDispatch();

  const handleBtn = (e) => {
    console.log('hoaaaa');
    e.preventDefault();
    dispatch(addToCart(data));
  };
  return (
    <div className='card'>
      <NavLink to={`product/${data._id}`}>
        <img
          src={`http://localhost:5000/${data.image}`}
          alt='Not Fount'
          style={{ width: '100%' }}
        />
      </NavLink>
      <div>
        <h5>{data.name}</h5>
        <p className='price'>$ {data.price}</p>
        <ButtonAddToCart data={data} />
      </div>
    </div>
  );
};

export default CardProduct;
