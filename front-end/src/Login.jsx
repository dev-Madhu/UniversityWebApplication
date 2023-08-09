import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogIn, setUserData } from './store/dataSlice';
import { Card } from './Layout/Card';

export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [inputErr, setInputErr] = useState({
    email: false,
    password: false
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.email !== '' && data.password !== '') {
      const response = await fetch('http://localhost:8082/api/v1/users/authenticate', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      const flag = result.error ? true : false;
      if (!flag) {
        dispatch(setLogIn(!flag));
        dispatch(setUserData(result));
        navigate('/profile');
      } else {
        navigate('/not-found');
      }
    } else {
      if (data.email === '') setInputErr({ ...inputErr, email: true });
      if (data.password === '') setInputErr({ ...inputErr, password: true });
    }
  };

  return (
    <Card>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input
          value={data.email}
          onChange={(e) => handleChange(e, 'email')}
          type='email'
          placeholder='youremail@gmail.com'
          id='email'
          name='email'
        />
        {inputErr.email && <p className='error_txt'>Email is required</p>}
        <label htmlFor='password'>password</label>
        <input
          value={data.password}
          onChange={(e) => handleChange(e, 'password')}
          type='password'
          placeholder='********'
          id='password'
          name='password'
        />
        {inputErr.password && <p className='error_txt'>Password is required</p>}
        <button type='submit' className='button_primary'>
          Log In
        </button>
      </form>
      <button className='link-btn' onClick={() => navigate('/register')}>
        Don't have an account? Register here.
      </button>
    </Card>
  );
};
