import React from 'react';
import { BsPersonPlusFill } from "react-icons/bs";
import './style.scss';

const BoxCard = () => {
  return (
    <div className="box-card d-flex mt-5 grid">
      <img src="http://placehold.it/300x300" />
      <div className="box-card__infor m-auto">
        <p>Khiem Le Dinh</p>
        <p><BsPersonPlusFill size={14} />1299 follower</p>
      </div>
    </div>
  );
}

export default BoxCard;