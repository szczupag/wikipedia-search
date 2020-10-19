import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

const SearchPanel = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [replaceWith, setReplaceWith] = useState('');

  const inputChangeHandler = (event, setValue) => {
    event.persist();
    const { target: { value } } = event;
    setValue(value);
  };

  const searchButtonClickHandler = () => console.log('Search!', searchPhrase);
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
    </div>
  );
}

export default SearchPanel;
