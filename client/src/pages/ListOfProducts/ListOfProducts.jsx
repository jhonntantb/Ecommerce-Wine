import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productsActions';
import CardProduct from '../../components/CardProduct/CardProduct';
import './ListOfProducts.css';
import { addToCart } from '../../redux/actions/shoppingActions';

const ListOfProducts = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    !!products && setData(products);
  }, [products]);
  return (
    <div className='products'>
      <h3>List of Products</h3>
      <div className='list-of-products'>
        {data.length > 0 &&
          data.map((product) => (
            <CardProduct
              data={product}
              key={product.id}
              addToCard={() => dispatch(addToCart(product))}
            />
          ))}
      </div>
    </div>
  );
};

export default ListOfProducts;
