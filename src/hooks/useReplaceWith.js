import { useState } from 'react';

const useReplaceWith = () => {
  const [replaceWith, setReplaceWith] = useState('');

  const replaceInputChangeHandler = (event) => {
    event.persist();
    const { target: { value } } = event;
    setReplaceWith(value);
  };

  const replaceButtonClickHandler = () => console.log('Replace!', replaceWith);
  const replaceAllButtonClickHandler = () => console.log('Replace all!', replaceWith);

  return {
    replaceInputChangeHandler,
    replaceButtonClickHandler,
    replaceAllButtonClickHandler,
    replaceWith,
  }
}

export default useReplaceWith;
