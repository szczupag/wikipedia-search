import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Hello World text', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello world!')).toBeTruthy();
});
