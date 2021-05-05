import React from 'react';
import './style.scss';

const Button = ({ type, text, classBtn }) => {
  return (
    <button type={type} className={`${classBtn || ""} btn-button`}>
      {text}
    </button>
  );
}

export default Button;