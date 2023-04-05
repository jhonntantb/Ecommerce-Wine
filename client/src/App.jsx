import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import ListOfProducts from './pages/ListOfProducts/ListOfProducts';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SubscribeForm from './components/Form/SubscribeForm';

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('');

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------
  console.log(response);
  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />

      <div>
        <SubscribeForm />
      </div>

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
  );
};

export default App;
