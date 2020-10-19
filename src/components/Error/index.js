import React from 'react';
import s from './styles.css';

const Error = ({ text }) => (
  <div className={s.root}>
    <span>{text}</span>
  </div>
);

export default Error;
