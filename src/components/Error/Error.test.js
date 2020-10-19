import React from 'react';
import { render } from '@testing-library/react';
import Error from './index';

it('Displays error message.', () => {
  const error = 'No result found!';
  const { getByText } = render(<Error text={error} />);
  expect(getByText(error)).toBeTruthy();
});
