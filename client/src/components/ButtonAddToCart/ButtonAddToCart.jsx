import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/shoppingActions';
import './ButtonAddToCart.css';

const ButtonAddToCart = ({ id }) => {
  const dispatch = useDispatch();

  const handleBtnAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };
  return (
    <button
      value={id}
      onClick={(e) => handleBtnAddToCart(e)}
      className='btn'
    >
      Agregar a Carrito
    </button>
  );
};

export default ButtonAddToCart;
