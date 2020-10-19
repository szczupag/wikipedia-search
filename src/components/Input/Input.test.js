import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Input from './index';

it('Displays input with passed value.', () => {
  const value = 'React';
  const mockOnClick = jest.fn();
  const { getByDisplayValue } = render(
    <Input
      value={value}
      onChange={mockOnClick}
    />);
  expect(getByDisplayValue(value)).toBeTruthy();
});

it('Calls onChange on input value change.', () => {
  const value = 'React';
  const mockOnClick = jest.fn();
  const { getByDisplayValue } = render(
    <Input
      value={value}
      onChange={mockOnClick}
    />
  );
  fireEvent.change(getByDisplayValue(value), { target: { value: 'TypeScript' } });
  expect(mockOnClick).toHaveBeenCalled();
});
