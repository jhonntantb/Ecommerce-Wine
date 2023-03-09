import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartLogo from '../CartLogo/CartLogo';
import { FiShoppingCart } from 'react-icons/fi';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState('');
  const [active, setActive] = useState('');

  const handleToggle = (e) => {
    e.preventDefault();
    !toggle ? setToggle('rotate') : setToggle('');
    !active ? setActive('active') : setActive('');
  };
  return (
    <nav>
      <div className='container'>
        <div className='container-logo'>
          <NavLink to='/'>
            <h2>
              Eco<span>Logo</span>
            </h2>
          </NavLink>
        </div>
        <ul className={`links ${active}`}>
          <li>
            <NavLink
              className='link'
              to='/'
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className='link'
              to='/shoppingCart'
            >
              <FiShoppingCart />
            </NavLink>
          </li>
        </ul>

        <div
          onClick={(e) => handleToggle(e)}
          className={`toggle ${toggle}`}
        >
          |||
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
