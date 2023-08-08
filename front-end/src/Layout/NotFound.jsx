import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import classes from './NotFound.module.css';
import { Card } from './Card';

export const NotFound = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate('/');
  };
  return (
    <div className={classes.container}>
      <Card>
        <img src='https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png ' alt='Not-Found' />
        <Button onClickHandler={handleBackBtn}>Back to Home</Button>
      </Card>
    </div>
  );
};
