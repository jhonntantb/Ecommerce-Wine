import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import ListOfProducts from './pages/ListOfProducts/ListOfProducts';
import { Route, Routes, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProductDetail from './pages/ProductDetail/ProductDetail';

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
          path='/product/:_id'
          element={<ProductDetail />}
        />
      </Routes>
      {/* <h1> Prueba tecnica front Ecomsur 2021</h1>
      <p>Borra esto y comienza aqui.</p> */}
      {/* Check to see if express server is running correctly */}
      {/* <h5>{response}</h5> */}
    </div>
  );
};

export default App;
