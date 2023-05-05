import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ListOfProducts from './pages/ListOfProducts/ListOfProducts';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SubscribeForm from './components/Form/SubscribeForm';
import './App.css';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />

      <div className='body'>
        <SubscribeForm />

        <Routes>
          <Route
            path='/'
            element={<ListOfProducts />}
          />
          <Route
            path='/shoppingCart'
            element={<ShoppingCart />}
          />
          <Route
            path='/product/:id'
            element={<ProductDetail />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
