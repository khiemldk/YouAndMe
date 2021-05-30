import React from 'react';
import { Input } from 'antd';
import './style.scss'
import { BsPencilSquare, BsImages, BsFillCameraVideoFill, BsMap } from "react-icons/bs";
import { Button, BoxPost } from 'components';

const BoxPublic = () => {

  const { TextArea } = Input;

  return (
    <div className='col-7 public '>
      <div className="grid d-lg-flex public__item pb-5">
        <div className="col-7 d-flex">
          <img src='http://placehold.it/300x300' />
          <TextArea row={2} placeholder='Write what you wish' className="custom-text-area ml-3" />
        </div>
        <div className="col-5 d-flex justify-content-between align-items-center">
          <BsPencilSquare size={16} />
          <BsImages size={16} />
          <BsFillCameraVideoFill size={16} />
          <BsMap size={16} />
          <Button text="Public" classBtn="custom-btn" />
        </div>

      </div>
      <div className="public__post mt-5">
        <BoxPost />
      </div>
    </div>
  );
}

export default React.memo(BoxPublic);