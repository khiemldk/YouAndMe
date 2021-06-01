import { SuggesFriends, BoxPublic, BoxPost, Button } from 'components';
import React from 'react';
import './style.scss';
import { BsPeopleFill, BsPersonPlusFill, BsNewspaper, BsPeople, BsFillImageFill, BsFillCameraVideoFill, BsFillChatFill } from "react-icons/bs";

const BoxCard = () => {
  return (
    <div className="box-card d-flex mt-5 grid">
      <img src="http://placehold.it/300x300" />
      <div className="box-card__infor m-auto">
        <p>Khiem Le Dinh</p>
        <p><BsPersonPlusFill size={14} />1299 follower</p>
      </div>
    </div>
  );
}

const BoxOnline = () => {
  return (
    <div className="chat-online-news text-center">
      <Button classBtn="custom-class mt-5 mb-4" text="Chat online" type="button" />
      <div className="d-flex grid flex-wrap justify-content-around">
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />
        <img className="mb-3 col-md-4 col-3" src="http://placehold.it/300x300" />

      </div>
    </div>
  );
}

const MenuNews = () => {
  return (
    <div className="menu-news grid pl-5 pr-4 ">
      <p className="mt-4 pb-4"><BsNewspaper size={14} color="#8dc63f" className="menu-news__icon mr-4" /> My Newsfeed </p>
      <p className="mt-4 pb-4"><BsPeopleFill size={14} color="#662d91" className="menu-news__icon mr-4" /> People nearby</p>
      <p className="mt-4 pb-4"><BsPeople size={14} color="#ee2a7b" className="menu-news__icon mr-4" /> Friends </p>
      <p className="mt-4 pb-4"><BsFillChatFill size={14} color="#f7941e" className="menu-news__icon mr-4" /> Messages </p>
      <p className="mt-4 pb-4"><BsFillImageFill size={14} color="#1c75bc" className="menu-news__icon mr-4" /> Images </p>
      <p className="mt-4 pb-4"><BsFillCameraVideoFill size={14} color="#9e1f63" className="menu-news__icon mr-4" /> Video </p>
    </div>

  );
}

const NewsFeed = () => {
  return (
    <div className="pt-76">
      <div className="grid d-md-flex newfeed">
        <div className="col-md-3 col-0">
          <BoxCard />
          <MenuNews />
          <BoxOnline />
        </div>
        <BoxPublic >
          <BoxPost type="2" />
        </BoxPublic>
        <SuggesFriends />
      </div>
    </div>
  );
}

export default NewsFeed;