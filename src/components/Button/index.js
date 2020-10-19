import React from 'react';

const Button = ({
  text,
  onClick,
}) => (
    <button
      role="button"
      onClick={onClick}
    >
      {text}
    </button>
  );

export default Button;
