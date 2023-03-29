import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import './CardProduct.css';

const CardProduct = ({ data }) => {
  return (
    <div className='card'>
      <NavLink to={`product/${data.id}`}>
        <img
          src={`${data.url_image}`}
          alt='Not Fount'
          style={{ width: '250px', height: '500px' }}
        />
      </NavLink>
      <div>
        <h5>{data.name}</h5>
        <p>S/ {data.price}</p>
        <ButtonAddToCart id={data.id} />
      </div>
    </div>
  );
};

export default CardProduct;
