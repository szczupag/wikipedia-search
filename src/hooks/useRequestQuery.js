import { useState, useEffect, useRef } from 'react';
import requestWikipediaQuery from '../api/requestWikipediaQuery';

const useRequestQuery = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const buttonlessRequestTimer = useRef(null);

  const searchInputChangeHandler = (event) => {
    event.persist();
    const { target: { value } } = event;
    setSearchPhrase(value);
  };

  const requestWikipediaQueryHandler = () => {
    setResults([]);
    setError(false);
    setLoading(true);
    requestWikipediaQuery(searchPhrase)
      .then(setResults)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const searchButtonClickHandler = () => {
    clearTimeout(buttonlessRequestTimer.current);
    requestWikipediaQueryHandler();
  };

  useEffect(() => {
    buttonlessRequestTimer.current = setTimeout(() => {
      if (searchPhrase) {
        requestWikipediaQueryHandler(searchPhrase);
      }
    }, 2000);
    return () => clearTimeout(buttonlessRequestTimer.current);
  }, [searchPhrase]);

  return {
    searchInputChangeHandler,
    searchButtonClickHandler,
    searchPhrase,
    loading,
    results,
    error,
  }
};

export default useRequestQuery;
