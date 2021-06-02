import React from 'react';
import { Button } from 'components';
import './style.scss'
const Profile = () => {
  return (
    <div className="profile grid">
      <div className="profile__cover" style={{ background: 'url(http://placehold.it/1030x360) no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="grid profile__option d-lg-flex d-none">
          <div className="col-lg-3">
            <img src='/static/imgs/cr.jpg' className="profile__picture" />
            <div className="profile__name text-center ml-n4">
              <span>Khiêm Lê Đình<br /></span>
              <span>Developer</span>
            </div>
          </div>
          <div className="col-lg-9 d-flex justify-content-between">
            <div className="profile__menu">
              <span className="pr-5 text-white">Timeline</span>
              <span className="pr-5 text-white">About</span>
              <span className="pr-5 text-white">Album</span>
              <span className="pr-5 text-white">Friends</span>
            </div>
            <div className="profile__follow-me">
              <span className="pr-4 text-white">1299 Following</span>
              <Button type="button" text="Add friends" classBtn="pt-4 pb-4 custom-btn" />
            </div>
          </div>
        </div>
        <div className="grid profile__mobile-option d-lg-none d-flex">
          <div className="profile__mobile-info">
            <img src='/static/imgs/cr.jpg' />
            <p className="text-center name mt-3">Lê Đình Khiêm</p>
            <p className="text-center">Developer</p>
          </div>
          <div className="profile__mobile--menu">
            <div className="text-center">
              <span className="ml-5 pr-5 text-black" >Timeline</span>
              <span className="pr-5 text-black">About</span>
              <span className="pr-5 text-black">Album</span>
              <span className="pr-5 text-black">Friends</span>
            </div>
            <Button type="button" text="Add friends" classBtn="pt-4 pb-4 custom-btn mt-4" />

          </div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(Profile);