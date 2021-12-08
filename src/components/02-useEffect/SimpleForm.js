import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFomrState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey!');
  }, []);

  useEffect(() => {
    console.log('formState cambió');
  }, [formState]);

  useEffect(() => {
    console.log('email cambió');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFomrState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="example@example.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>


      { (name === '123') && <Message />}
      
    </>
  );
};
