import React from 'react';
import Result from './Result';
import Loading from '../Loading';
import Error from '../Error';

const Results = ({
  data,
  error,
  loading,
}) => {
  if (loading) return <Loading />;
  if (error) return <Error text={error} />
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
