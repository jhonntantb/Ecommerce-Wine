import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/shoppingActions';
import './ButtonAddToCart.css';

const ButtonAddToCart = ({ data }) => {
  const dispatch = useDispatch();

  const handleBtnAddToCart = () => {
    e.preventDefault();
    dispatch(addToCart(data));
  };
  return (
    <button
      onClick={(e) => handleBtnAddToCart(e)}
      disabled={!data?.countInStock}
      className='btn'
    >
      Agregar a Carrito
    </button>
  );
};

export default ButtonAddToCart;
