import Results from ".";
import React from 'react';
import s from './styles.css';

const Result = ({
  title,
  snippet,
}) => (
  <div className={s.result}>
    <span className={s.title}>
      {title}
    </span>
    <div
      className={s.snippet}
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  </div>
);

export default Result;
