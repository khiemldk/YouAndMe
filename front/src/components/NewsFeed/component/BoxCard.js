import React from 'react';
import { BsPersonPlusFill } from "react-icons/bs";
import { Link } from 'routers';
import './style.scss';

const BoxCard = () => {
  return (
    <div className="box-card d-flex mt-5 grid">
      <img src="/static/imgs/300x300.png" />
      <div className="box-card__infor m-auto">
        <Link route="/timeline?id=12">
          <a>
            <p>Khiem Le Dinh</p>
          </a>
        </Link>
        <Link route={`/timeline/friends?id="123"`}>
          <a>
            <p><BsPersonPlusFill size={14} />1299 follower</p>
          </a>
        </Link>
      </div>
    </div >
  );
}

export default BoxCard;