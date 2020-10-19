import { useState } from 'react';

const useReplaceWith = (results, setResults) => {
  const [replaceWith, setReplaceWith] = useState('');

  const replaceInputChangeHandler = (event) => {
    event.persist();
    const { target: { value } } = event;
    setReplaceWith(value);
  };

  const replaceAll = () => {
    const searchMatch = /<span class="searchmatch">(.*?)<\/span>/gm;
    const newSearchMatch = `<span class="searchmatch">${replaceWith}</span>`;
    const newResults = results.map(result => {
      const newSnippet = result.snippet.replaceAll(searchMatch, newSearchMatch);
      return ({
        ...result,
        snippet: newSnippet,
      });
    });
    setResults(newResults);
  };

  const replaceButtonClickHandler = () => console.log('Replace!', replaceWith);

  return {
    replaceInputChangeHandler,
    replaceButtonClickHandler,
    replaceAllButtonClickHandler: replaceAll,
    replaceWith,
  };
};

export default useReplaceWith;
