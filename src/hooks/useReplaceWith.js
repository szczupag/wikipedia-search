import { useState } from 'react';

const useReplaceWith = () => {
  const [replaceWith, setReplaceWith] = useState('');

  const replaceInputChangeHandler = (event) => {
    event.persist();
    const { target: { value } } = event;
    setReplaceWith(value);
  };

  const replaceFirst = () => {
    const matches = document.querySelectorAll('.searchmatch');
    const firstMatch = Array.from(matches).find(el => el.innerHTML !== replaceWith);
    if (firstMatch) firstMatch.innerHTML = replaceWith;
  };

  const replaceButtonClickHandler = () => {
    if (replaceWith) replaceFirst();
  }

  const replaceAll = () => {
    const matches = document.querySelectorAll('.searchmatch');
    if (matches) matches.forEach(match => match.innerHTML = replaceWith);
  };

  const replaceAllButtonClickHandler = () => {
    if (replaceWith) replaceAll();
  }

  return {
    replaceInputChangeHandler,
    replaceButtonClickHandler,
    replaceAllButtonClickHandler,
    replaceWith,
  };
};

export default useReplaceWith;
