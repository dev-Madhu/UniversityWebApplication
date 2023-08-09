import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from './Layout/Card';

export const Profile = () => {
  const globalState = useSelector((state) => state.cart);
  const { userDetails, isLoggedIn } = globalState;
  const navigate = useNavigate();

  const { username, email, password } = userDetails;

  return isLoggedIn ? (
    <Card>
      <div className='not-found-container'>
        <li className='profile-item'>
          <img
            src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
            alt='loading'
            className='not-found-img'
          />
          <h1 className='head'>name: {username} </h1>
          <h1 className='not-found-heading'>email : {email} </h1>
          <p className='not-found-heading'> password:{password} </p>
          <p className='description'>about : I am a programmer and Developer</p>
        </li>
      </div>
    </Card>
  ) : (
    navigate('/')
  );
};
