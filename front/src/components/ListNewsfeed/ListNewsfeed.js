import React, { useState } from 'react';
import { BoxImage } from 'components'
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import './style.scss'
import { Modal } from 'antd';
const ItemNews = ({ type, onClick }) => {
  return (
    <div className="item-news col-md-6 col-12 mb-5" >
      <div className="item-news__img" onClick={onClick}>
        {type === "1" &&
          <img src="http://placehold.it/800x800" />
        }
        {type === "2" &&
          <video width="100%" controls>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          </video>
        }
      </div>
      <div>
        <div className='ml-4 mr-4 item-news__icon mb-4 pb-4 pt-3'>
          <span className="mr-4 mr-3"><AiOutlineLike size={16} /> 49 </span> <span><AiOutlineDislike size={16} /> 0 </span>
        </div>
        <div className='mt-3 ml-4 mr-4 item-news__info d-flex pb-4'>
          <img src="http://placehold.it/300x300" />
          <div className="ml-4">
            <p><strong>Khiem lee</strong></p>
            <span>Friend</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailPost = ({ isModalVisible, handleCancel, type }) => {
  return (
    <Modal visible={isModalVisible} onCancel={handleCancel} width={1000} footer={null} bodyStyle={{padding: 0}} closable={false}>
      <BoxImage type={type} />
    </Modal>
  );
}

const ListNewsfeed = ({ type }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="list-newsfeed d-flex flex-wrap">
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />
      <ItemNews type={type} onClick={showModal} />

      <DetailPost isModalVisible={isModalVisible} handleCancel={handleCancel} type={type} />
    </div>
  );
}

export default ListNewsfeed;