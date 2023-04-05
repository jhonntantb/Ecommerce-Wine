import React, { useState } from 'react';
import './SubscribeForm.css';
import vinos from '../../../../screenshots/vinos.png';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    // TODO
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
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
      <input
        aria-label='Your email address'
        name='email_address'
        placeholder='Your email address'
        required
        type='email'
        onChange={handleEmailChange}
        value={email}
      />
      <button>Registrarse</button>
    </form>
  );
};

export default SubscribeForm;
