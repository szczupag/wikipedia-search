import React from 'react';
import Button from '../Button';
import Input from '../Input';
import useRequestQuery from '../../hooks/useRequestQuery';
import useReplaceWith from '../../hooks/useReplaceWith';
import Results from '../Results';
import s from './styles.css';

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
    <>
      <div className={s.inputsWrapper}>
        <div className={s.row}>
          <Input
            value={searchPhrase}
            placeholder="Search Phrase"
            onChange={searchInputChangeHandler}
          />
          <div className={s.buttonWrapper}>
            <Button
              text="Search"
              onClick={searchButtonClickHandler}
            />
          </div>
        </div>
        <div className={s.row}>
          <Input
            value={replaceWith}
            placeholder="Replace With"
            onChange={replaceInputChangeHandler}
          />
          <div className={s.buttonWrapper}>
            <Button
              text="Replace"
              onClick={replaceButtonClickHandler}
            />
            <Button
              text="Replace all"
              onClick={replaceAllButtonClickHandler}
            />
          </div>
        </div>
      </div>
      <Results
        data={results}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default SearchPanel;
