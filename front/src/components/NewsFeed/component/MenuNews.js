import React from 'react';
import { BsPeopleFill, BsNewspaper, BsPeople, BsFillImageFill, BsFillCameraVideoFill, BsFillChatFill } from "react-icons/bs";
import { Link } from 'routers';
import './style.scss';

const MenuNews = () => {
  return (
    <div className="menu-news grid pl-5 pr-4 ">
      <Link route="/newsfeed">
        <a><p className="mt-4 pb-4"><BsNewspaper size={14} color="#8dc63f" className="menu-news__icon mr-4" /> My Newsfeed </p></a>
      </Link>
      <Link route="/newsfeed/people-near">
        <a>
          <p className="mt-4 pb-4"><BsPeopleFill size={14} color="#662d91" className="menu-news__icon mr-4" /> People nearby</p>

        </a>
      </Link>
      <p className="mt-4 pb-4"><BsPeople size={14} color="#ee2a7b" className="menu-news__icon mr-4" /> Friends </p>
      <p className="mt-4 pb-4"><BsFillChatFill size={14} color="#f7941e" className="menu-news__icon mr-4" /> Messages </p>
      <p className="mt-4 pb-4"><BsFillImageFill size={14} color="#1c75bc" className="menu-news__icon mr-4" /> Images </p>
      <p className="mt-4 pb-4"><BsFillCameraVideoFill size={14} color="#9e1f63" className="menu-news__icon mr-4" /> Video </p>
    </div>
  );
}

export default MenuNews;