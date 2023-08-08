import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.css';
import { WishListButton } from './WishListButton';
import { setLogIn } from '../store/dataSlice';
import { Button } from './Button';

export const Header = () => {
  const navigate = useNavigate();
  const globalState = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    globalState.isLoggedIn && (
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <button onClick={() => navigate('/universities')} className={styles.button}>
            Universities
          </button>
          <button onClick={() => navigate('/profile')} className={styles.button}>
            Profile Dashboard
          </button>
          <WishListButton onClick={() => navigate('/wishlist')} />
          <Button alt onClickHandler={() => dispatch(setLogIn(false))}>
            Logout
          </Button>
        </header>
      </div>
    )
  );
};
