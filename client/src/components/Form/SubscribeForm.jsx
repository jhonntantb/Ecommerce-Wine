import React, { useState } from 'react';
import './SubscribeForm.css';
import vinos from '../../../../screenshots/vinos.png';
import {
  validatePhoneNumber,
  validateEmail,
} from '../../utils/regularExpressions';

const SubscribeForm = () => {
  const initFormValidate = {
    validatePhone: false,
    validateEmail: false,
  };
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [validateForm, setValidateForm] = useState(initFormValidate);

  const handleSubmit = async (event) => {
    // TODO
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    if (value.match(validateEmail)) {
      setValidateForm.validateEmail(true);
    }
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    if (value.match(validatePhoneNumber)) {
      setValidateForm.validatePhone(true);
    }
    setPhone(value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='subscribe'
    >
      <img
        src={vinos}
        alt='vinos'
      />
      <input
        aria-label='Your first name'
        required
        name='fields[first_name]'
        placeholder='Tu nombre'
        type='text'
        onChange={handleNameChange}
        value={name}
      />
      <input
        aria-label='Your phone'
        name='fields[phone]'
        required
        placeholder='Tu número de telefono'
        type='text'
        onChange={handlePhoneChange}
        value={phone}
      />
      {/*poner un span que muestre si la validación es correcta*/}
      <input
        aria-label='Your email address'
        name='email_address'
        placeholder='Your email address'
        type='email'
        onChange={handleEmailChange}
        value={email}
      />
      {/*poner un span que muestre si la validación es correcta*/}
      <button>Registrarse</button>
    </form>
  );
};

export default SubscribeForm;
