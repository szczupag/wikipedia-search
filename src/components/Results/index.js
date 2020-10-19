import React from 'react';
import Result from './Result';
import Loading from '../Loading';

const Results = ({
  data,
  error,
  loading,
}) => {
  if (loading) return <Loading />;
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
