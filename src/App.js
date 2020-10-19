import React from 'react';
import SearchPanel from './components/SearchPanel';
import s from './App.css';

const App = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Wikipedia Search 🔍</h1>
      <SearchPanel />
    </div>
  );
};

export default App;
