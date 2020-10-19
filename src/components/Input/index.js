import React from 'react';
import s from './styles.css';

const Input = ({
  value,
  onChange,
  placeholder,
}) => (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={s.input}
    />
  );

export default Input;
