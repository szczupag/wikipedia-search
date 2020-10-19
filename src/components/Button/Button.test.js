import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import Button from './index';

it('Displays button with text.', () => {
  const text = 'Submit';
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Button
      text={text}
      onClick={mockOnClick}
    />);
  expect(getByText(text)).toBeTruthy();
});

it('Calls onClick on button click.', () => {
  const text = 'Submit';
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Button
      text={text}
      onClick={mockOnClick}
    />);
  const button = getByText(text);
  fireEvent.click(button)
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
