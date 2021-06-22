import React from 'react';
import { Input } from 'antd';
import './style.scss'
import { BsPencilSquare, BsImages, BsFillCameraVideoFill, BsMap } from "react-icons/bs";
import { Button, BoxPost } from 'components';

const BoxPublic = ({ children }) => {

  const { TextArea } = Input;

  return (
    <div className='col-lg-7 col-12 public '>
      <div className="grid d-lg-flex public__item pb-5">
        <div className="col-lg-7 col-12 d-flex">
          <img src='/static/imgs/300x300.png' />
          <TextArea row={2} placeholder='Write what you wish' className="custom-text-area ml-3" />
        </div>
        <div className="col-lg-5 col-12 d-flex justify-content-between align-items-center mt-lg-0 mt-4">
          <BsPencilSquare size={16} />
          <BsImages size={16} />
          <BsFillCameraVideoFill size={16} />
          <BsMap size={16} />
          <Button text="Public" classBtn="custom-btn" />
        </div>
      </div>
      <div className="public__post mt-5">
        {children}
      </div>
    </div>
  );
}

export default React.memo(BoxPublic);