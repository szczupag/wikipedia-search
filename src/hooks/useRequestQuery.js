import { useState, useEffect } from 'react';
import requestWikipediaQuery from '../api/requestWikipediaQuery';

const useRequestQuery = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const searchInputChangeHandler = (event) => {
    event.persist();
    const { target: { value } } = event;
    setSearchPhrase(value);
  };

  const requestWikipediaQueryHandler = () => {
    setLoading(true);
    requestWikipediaQuery(searchPhrase)
      .then(setResults)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const searchButtonClickHandler = () => {
    requestWikipediaQueryHandler();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchPhrase) requestWikipediaQueryHandler(searchPhrase);
    }, 2000);
    return () => clearTimeout(timeout);
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
