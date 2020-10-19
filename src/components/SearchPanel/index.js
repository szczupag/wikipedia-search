import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

const urlWithParamsBuilder = (baseURL, data) => {
  const searchParams = new URLSearchParams(data);
  const url = new URL(baseURL);
  url.search = searchParams.toString();
  return url;
};

const requestWikipediaQuery = async (searchPhrase) => {
  const requestParams = {
    action: 'query',
    list: 'search',
    format: 'json',
    srlimit: '10',
    origin: '*',
    srsearch: searchPhrase,
  };
  const url = urlWithParamsBuilder('https://en.wikipedia.org/w/api.php', requestParams);
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw(`[Wikipedia API error] ${response.status}`);
  }
  const result = (data.query || {}).search || [];
  if (result.length === 0) {
    throw('No result found!')
  }
  return result;
};

const SearchPanel = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [replaceWith, setReplaceWith] = useState('');
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState(false);

  const inputChangeHandler = (event, setValue) => {
    event.persist();
    const { target: { value } } = event;
    setValue(value);
  };

  const requestWikipediaQueryHandler = () => {
    requestWikipediaQuery(searchPhrase)
      .then(setResults)
      .catch(setErrors)
  }

  const searchButtonClickHandler = () => {
    requestWikipediaQueryHandler();
  };

  const replaceButtonClickHandler = () => console.log('Replace!', replaceWith);
  const replaceAllButtonClickHandler = () => console.log('Replace all!', replaceWith);

  return (
    <div>
      <Input
        value={searchPhrase}
        placeholder="Search Phrase"
        onChange={(e) => inputChangeHandler(e, setSearchPhrase)}
      />
      <Button
        text="Search"
        onClick={searchButtonClickHandler}
      />
      <Input
        value={replaceWith}
        placeholder="Replace With"
        onChange={(e) => inputChangeHandler(e, setReplaceWith)}
      />
      <Button
        text="Replace"
        onClick={replaceButtonClickHandler}
      />
      <Button
        text="Replace all"
        onClick={replaceAllButtonClickHandler}
      />
      <p>Results</p>
      {results.map(el => <p>{JSON.stringify(el)}</p>)}
      <p>Errors</p>
      {errors}
    </div>
  );
}

export default SearchPanel;
