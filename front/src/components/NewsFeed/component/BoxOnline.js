import React from 'react';
import { Button } from 'components';
import './style.scss'
const BoxOnline = () => {
  return (
    <div className="chat-online-news text-center">
      <Button classBtn="custom-class mt-5 mb-4" text="Chat online" type="button" />
      <div className="d-flex grid flex-wrap justify-content-around">
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />
        <img className="mb-3 col-lg-4 col-3" src="/static/imgs/300x300.png" />

      </div>
    </div>
  );
}


export default BoxOnline;