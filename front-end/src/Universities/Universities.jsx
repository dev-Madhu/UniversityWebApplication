import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUniversity } from '../store/dataSlice';
import { Card } from '../Layout/Card';
import { Button } from '../Layout/Button';
import styles from './Universities.module.css';

export const Universities = () => {
  const [uniDataState, setUniDataState] = useState([]);
  const navigate = useNavigate();
  const globalState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isLoggedIn } = globalState;
  const fetchData = async () => {
    const uniData = await fetch('http://localhost:8082/api/v2/fetch');
    const uniDataList = await uniData.json();
    setUniDataState(uniDataList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoggedIn ? (
    <ul className={styles.univList}>
      {uniDataState.map((university) => {
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
              <Button onClickHandler={() => dispatch(addUniversity(university))}>Add to WishList</Button>
            </div>
          </Card>
        );
      })}
    </ul>
  ) : (
    navigate('/')
  );
};

export default Universities;
