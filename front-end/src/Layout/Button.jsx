import React from "react";
import classes from './Button.module.css';

export const Button = (props) => {
    const btnClass = `${classes.button} ${props.alt ? classes.light : classes.regular}`;
  return (
    <button id={props.id} className={btnClass} onClick={props.onClickHandler}>
      {props.children}
    </button>
  );
};
