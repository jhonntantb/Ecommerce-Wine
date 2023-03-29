import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartLogo from '../CartLogo/CartLogo';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState('');
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  const handleToggle = (e, url) => {
    e.preventDefault();
    !toggle ? setToggle('rotate') : setToggle('');
    !active ? setActive('active') : setActive('');
    if (url) {
      navigate(url);
      setToggle('');
      setActive('');
    }
  };
  return (
    <nav>
      <div className='container'>
        <div className='container-logo'>
          <NavLink to='/'>
            <h2>
              Pame<span>Shop</span>
            </h2>
          </NavLink>
        </div>
        <ul className={`links ${active}`}>
          <NavLink
            className='link'
            to='/'
            onClick={(e) => handleToggle(e, '/')}
          >
            <li className='link'>Products</li>
          </NavLink>
          <NavLink
            className='link'
            to='/shoppingCart'
            onClick={(e) => handleToggle(e, '/shoppingCart')}
          >
            <li className='link'>
              <CartLogo />
            </li>
          </NavLink>
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
