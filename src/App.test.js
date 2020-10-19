import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('Renders title text', () => {
  const { getByText } = render(<App />);
  expect(getByText('Wikipedia Search 🔍')).toBeTruthy();
});
