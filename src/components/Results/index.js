import React from 'react';
import Result from './Result';

const Results = ({
  data,
  error,
  loading,
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      {data.map(({ title, snippet, pageid }) => (
        <Result
          key={pageid}
          title={title}
          snippet={snippet}
        />
      ))}
    </>
  )
};

export default Results;
