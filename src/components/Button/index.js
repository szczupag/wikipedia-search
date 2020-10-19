import React from 'react';
import s from './styles.css';

const Button = ({
  text,
  onClick,
}) => (
    <button
      role="button"
      onClick={onClick}
      className={s.button}
    >
      {text}
    </button>
  );

export default Button;
