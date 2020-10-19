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

  const replaceAll = () => {
    const matches = document.querySelectorAll('.searchmatch');
    if (matches) matches.forEach(match => match.innerHTML = replaceWith);
  };

  return {
    replaceInputChangeHandler,
    replaceButtonClickHandler: replaceFirst,
    replaceAllButtonClickHandler: replaceAll,
    replaceWith,
  };
};

export default useReplaceWith;
