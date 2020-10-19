import React from 'react';
import { render } from '@testing-library/react';
import Results from './index';

const data = [
  { pageid: 1, title: 'Alpha', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { pageid: 2, title: 'Beta', snippet: 'Commodi quasi ducimus itaque quo sed id, molestias quidem atque eos, libero dicta tempora.' },
  { pageid: 3, title: 'Gamma', snippet: 'Sunt ab est facilis aliquam veritatis temporibus culpa?' },
];

it('Displays results with title and snippet.', () => {
  const { getByText } = render(
    <Results
      loading={false}
      error={false}
      data={data}
    />);
  data.forEach(row => {
    expect(getByText(row.title)).toBeTruthy();
    expect(getByText(row.snippet)).toBeTruthy();
  });
});

it('Displays error message.', () => {
  const error = 'No result found!';
  const { getByText } = render(
    <Results
      loading={false}
      error={error}
      data={[]}
    />);
  expect(getByText(error)).toBeTruthy();
});
