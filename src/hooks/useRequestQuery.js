import { useState } from 'react';
import requestWikipediaQuery from '../api/requestWikipediaQuery';

const useRequestQuery = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const searchInputChangeHandler = (event) => {
    event.persist();
    const { target: { value } } = event;
    setSearchPhrase(value);
  };

  const requestWikipediaQueryHandler = () => {
    requestWikipediaQuery(searchPhrase)
      .then(setResults)
      .catch(setError)
  }

  const searchButtonClickHandler = () => {
    requestWikipediaQueryHandler();
  };

  return {
    searchInputChangeHandler,
    searchButtonClickHandler,
    searchPhrase,
    results,
    error,
  }
};

export default useRequestQuery;
