import React from 'react';
import { Button } from 'components';
import './style.scss'
const Profile = () => {
  return (
    <div className="profile grid">
      <div className="profile__cover" style={{ background: 'url(http://placehold.it/1030x360) no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="grid profile__option d-flex">
          <div className="col-lg-3">
            <div className="profile__picture">
              <img src='/static/imgs/cr.jpg' />
            </div>
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
              <span className="pr-5 text-white">1299 people following her</span>
              <Button type="button" text="Add friends" classBtn="pt-4 pb-4 custom-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;