import React, { useState } from 'react';
import Input from '../Input';

const SearchPanel = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [replaceWith, setReplaceWith] = useState('');

  const inputOnChangeHandler = (event, setValue) => {
    event.persist();
    const { target: { value } } = event;
    setValue(value);
  };

  return (
    <div>
      <div>{searchPhrase} {replaceWith}</div>
      <Input
        value={searchPhrase}
        placeholder="Search Phrase"
        onChange={(e) => inputOnChangeHandler(e, setSearchPhrase)}
      />
      <Input
        value={replaceWith}
        placeholder="Replace With"
        onChange={(e) => inputOnChangeHandler(e, setReplaceWith)}
      />
    </div>
  );
}

export default SearchPanel;
