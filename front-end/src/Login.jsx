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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8082/api/v1/users/authenticate', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    const flag = result.error  ? true : false;
    console.log(result);
    if (!flag) {
      dispatch(setLogIn(!flag));
      dispatch(setUserData(result));
      navigate('/profile');
    } else {
      navigate('/not-found');
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
        <label htmlFor='password'>password</label>
        <input
          value={data.password}
          onChange={(e) => handleChange(e, 'password')}
          type='password'
          placeholder='********'
          id='password'
          name='password'
        />
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
