import React from 'react';
import Button from '../Button';
import Input from '../Input';
import useRequestQuery from '../../hooks/useRequestQuery';
import useReplaceWith from '../../hooks/useReplaceWith';
import Results from '../Results';

const SearchPanel = () => {
  const {
    searchInputChangeHandler,
    searchButtonClickHandler,
    setResults,
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
  } = useReplaceWith(results, setResults);

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
      <Results
        data={results}
        error={error}
        loading={loading}
      />
    </div>
  );
}

export default SearchPanel;
