import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductInfo } from '../../redux/actions/productsActions';
import { useParams } from 'react-router-dom';
import ButtonAddToCart from '../../components/ButtonAddToCart/ButtonAddToCart';
import RatingStar from '../../components/RatingStar/RatingStar';
import './ProductDetail.css';

export default function ProductDetail(props) {
  let { _id } = useParams();
  const dispatch = useDispatch();

  let productDetail = useSelector((state) => state.products.productInfo);

  useEffect(() => {
    dispatch(getProductInfo(_id));
  }, [dispatch, _id]);

  return (
    <div className='detail'>
      <img
        src={`http://localhost:5000/${productDetail?.image}`}
        alt='Not Fount'
        className='img-detail'
      />
      <div className='detail-info'>
        <div className='info'>
          <h4>{productDetail?.name}</h4>
          <p>{productDetail?.description}</p>
        </div>
        <p>Rating</p>
        <RatingStar rating={productDetail?.rating} />
        <br />
        <p className='detail-price'>${productDetail?.price}</p>
        <ButtonAddToCart data={productDetail} />
      </div>
    </div>
  );
}
