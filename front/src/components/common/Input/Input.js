import React from 'react';
import './style.scss';

const Input = ({ type, classInput, text }) => {
  return (
    <input placeholder={text} className={`${classInput || ""} my-input`} type={type} />
  );
}

export default React.memo(Input);