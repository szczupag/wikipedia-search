import React from 'react';
import Button from '../Button';
import Input from '../Input';
import useRequestQuery from '../../hooks/useRequestQuery';
import useReplaceWith from '../../hooks/useReplaceWith';

const SearchPanel = () => {
  const {
    searchInputChangeHandler,
    searchButtonClickHandler,
    searchPhrase,
    loading,
    results,
    error,
  } = useRequestQuery();

  const {
    replaceInputChangeHandler,
    replaceButtonClickHandler,
    replaceAllButtonClickHandler,
    replaceWith,
  } = useReplaceWith();

  return (
    <div>
      <Input
        value={searchPhrase}
        placeholder="Search Phrase"
        onChange={searchInputChangeHandler}
      />
      <Button
        text="Search"
        onClick={searchButtonClickHandler}
      />
      <Input
        value={replaceWith}
        placeholder="Replace With"
        onChange={replaceInputChangeHandler}
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
      {loading && <span>Loading...</span>}
      {results.map((el, id) => <p key={id}>{JSON.stringify(el)}</p>)}
      <p>Errors</p>
      {error}
    </div>
  );
}

export default SearchPanel;
