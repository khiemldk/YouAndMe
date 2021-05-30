import React from 'react';
import './style.scss';
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const BoxImage = ({ children }) => {
  return (
    <div className="grid box-img pb-5">
      <img src='http://placehold.it/1920x1280' />
      <div className="box-img__content pl-4 pt-4 d-flex">
        <img src='http://placehold.it/300x300' className='mr-4' />
        <div className="box-img__info d-flex justify-content-between grid">
          <div className='mt-3 box-img__user'>
            <span className="mr-4"><strong>Lê Đình Khiêm</strong></span> <span>following</span>
            <p className='mt-3'>Yesterday</p>
          </div>
          <div className='mt-3 pr-5 box-img__like'>
            <span className="mr-5"><AiOutlineLike size={16} /> 49 </span> <span><AiOutlineDislike size={16} /> 0 </span>
          </div>
        </div>

      </div>
      <div className="box-img__post mt-3 mr-5">
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   </p>
      </div>
      <div className="box-img__content--comment">
        {children}
      </div>
    </div>
  );
}

export default React.memo(BoxImage);