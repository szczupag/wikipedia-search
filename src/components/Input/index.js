import React from 'react';

const Input = ({
  value,
  onChange,
  placeholder,
}) => (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

export default Input;
