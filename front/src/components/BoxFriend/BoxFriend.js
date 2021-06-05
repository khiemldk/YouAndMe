import React from 'react';
import './style.scss';

const FriendItem = () => {

  return (
    <div className="friend-item col-lg-6 col-12 mb-5">
      <div className="friend-item__img" style={{ background: 'url(http://placehold.it/1030x360) no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src="http://placehold.it/300x300" className="ml-4" />
      </div>
      <div className="friend-item__info pl-4 pr-4">
        <div className="d-flex justify-content-between">
          <span><strong>Le Dinh Khiem</strong></span>
          <span>My Friends</span>
        </div>
        <p className="mt-4">Student at HAUI</p>
      </div>
    </div>
  );
}

const BoxFriend = () => {
  return (
    <div className="box-friend d-flex flex-wrap">
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
    </div>
  );
}

export default BoxFriend;