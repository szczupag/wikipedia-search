import { useState } from 'react';
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
    requestWikipediaQuery(searchPhrase)
      .then(setResults)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const searchButtonClickHandler = () => {
    setLoading(true);
    requestWikipediaQueryHandler();
  };

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
