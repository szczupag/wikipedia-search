import React from 'react';
import s from './styles.css';

const Loading = () => (
  <div className={s.root}>
    <div className={s.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loading;
