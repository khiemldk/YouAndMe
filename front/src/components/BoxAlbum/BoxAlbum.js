import React, { useState } from 'react';
import './style.scss'
import { BsPlus } from "react-icons/bs";
import { Modal } from 'antd';
import { BoxImage } from 'components'

const list = [
  "/static/imgs/1.jpeg",
  "/static/imgs/Alo.jpg",
  "/static/imgs/anh1.png",
  "/static/imgs/cr.jpg",
  "/static/imgs/khang1.png",
];

const AlbumItem = ({ isPlus, item, list, onClick }) => {

  const submitData = () => {
    if (onClick) {
      onClick(list);
    }
  }


  return (
    <div className="box-album__item col-4 mb-4 d-flex" onClick={submitData}>
      {isPlus &&
        <div className="d-flex m-auto" >
          <BsPlus size={30} />
        </div>
      }
      {!isPlus &&
        <img src={item ? item : '/static/imgs/1000x1000.png'} />
      }
    </div>

  );
}

const DetailPost = ({ isModalVisible, handleCancel, type, item }) => {
  return (
    <Modal visible={isModalVisible} onCancel={handleCancel} width={800} footer={null} bodyStyle={{ padding: 0 }} closable={false}>
      <BoxImage type={type} item={item} />
    </Modal>
  );
}

const BoxAlbum = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState({})
  const [listItem, setListItem] = useState([])

  const showModal = (value) => {
    setListItem(value)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="col-lg-7 col-12 box-album d-flex flex-wrap mt-5 p-0">
      <AlbumItem isPlus />
      {list.map((item, index) => (
        <AlbumItem item={item} list={list} onClick={showModal} />
      ))}
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />

      <DetailPost isModalVisible={isModalVisible} handleCancel={handleCancel} type="1" item={listItem[0]} />
    </div>
  );
}

export default BoxAlbum;