import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e, property) => {
    setUserData({ ...userData, [property]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const url = 'http://localhost:8082/api/v1/users';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status == 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
    setUserData({ username: '', email: '', password: '' });
  };

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>enter full name</label>
        <input
          value={userData.username}
          name='name'
          onChange={(e) => handleChange(e, 'username')}
          id='name'
          placeholder='full Name'
        />
        <label htmlFor='email'>email</label>
        <input
          value={userData.email}
          onChange={(e) => handleChange(e, 'email')}
          type='email'
          placeholder='youremail@gmail.com'
          id='email'
          name='email'
        />
        <label htmlFor='password'>password</label>
        <input
          value={userData.password}
          onChange={(e) => handleChange(e, 'password')}
          type='password'
          placeholder='********'
          id='password'
          name='password'
        />
        <button type='submit' className='button_primary'>
          Register
        </button>
      </form>

      <button className='link-btn' onClick={() => navigate('/')}>
        Already Registered? Login here.
      </button>
    </div>
  );
};
