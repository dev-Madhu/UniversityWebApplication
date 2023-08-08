import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Layout/Card';
import { Button } from '../Layout/Button';
import styles from './Universities.module.css';
import { removeUniversity } from '../store/dataSlice';

export const WishList = () => {
  const navigate = useNavigate();
  const globalState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isLoggedIn, wishList } = globalState;

  return isLoggedIn ? (
    <ul className={styles.univList}>
      {wishList.map((university) => {
        const { name, domains, country, web_pages, id } = university;
        return (
          <Card key={id}>
            <div className={styles.card}>
              <h2>Name : {name}</h2>
              <h2> County : {country} </h2>
              <p>Domain: {domains[0]}</p>
              <Button>
                <a href={web_pages[0]} target='_blank'>
                  Univerity Website
                </a>
              </Button>
              <br />
              <Button onClickHandler={() => dispatch(removeUniversity(university.id))}>Remove</Button>
            </div>
          </Card>
        );
      })}
    </ul>
  ) : (
    navigate('/')
  );
};
