import React from 'react';
import { FaStar } from 'react-icons/fa';
import './RatingStar.css';

const RatingStar = ({ rating }) => {
  const round = Math.round(rating);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
            />
            <FaStar
              className='star'
              color={ratingValue <= round ? '#ffc107' : '#e4e5e9'}
              size={50}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStar;
