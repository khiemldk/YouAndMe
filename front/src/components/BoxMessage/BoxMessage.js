import React, { useEffect, useState } from 'react';
import './style.scss';
import { BsReplyFill } from "react-icons/bs";
import { Link } from 'routers';

const MyMessage = () => {

  return (
    <div className="mb-5 my-message d-flex justify-content-between">
      <div className="my-message__mess pl-4 pr-4 pt-4 pb-4">
        <div className="my-message__info">
          <div className="pb-3 mb-3 grid d-flex justify-content-between">
            <span><strong>Khiem lee</strong></span> <span >an hour ago</span>
          </div>

          <p className="m-0 my-message__content text-justify">
            This is my message really nigga. recently, i'm feeling stress becasue alot of thing coming. he
            No
          </p>
        </div>
      </div>
      <img src="/static/imgs/300x300.png" />
    </div>
  );
}

const YourMessage = () => {

  return (
    <div className="my-message d-flex justify-content-between mb-5 ">
      <img src="/static/imgs/300x300.png" />
      <div className="my-message__mess your-message pl-4 pr-4 pt-4 pb-4">
        <div className="my-message__infor">
          <div className="pb-3 mb-3 grid d-flex justify-content-between">
            <span><strong>Khiem lee</strong></span> <span >an hour ago</span>
          </div>

          <p className="m-0 my-message__content text-justify">
            This is my message really nigga. recently, i'm feeling stress becasue alot of thing coming. he
            No
          </p>
        </div>
      </div>
    </div>
  );
}

const InputChat = () => {

  return (
    <div className="input-chat p-5">
      <input type="text" placeholder="Type your message" className="p-2" />
      <button type="button" className="p-2">
        Send
      </button>
    </div>
  );
}

const BoxAllMessage = ({ handleClick }) => {

  const getPathName = () => {
    return "/newsfeed/messages?id=1235"
  }

  return (
    <Link route={getPathName()}>
      <div className="all-message d-flex pr-5 pl-5 mb-5">
        <img src="/static/imgs/300x300.png" />
        <div className="grid pl-4">
          <div className="d-flex justify-content-between">
            <strong>Khiem lee</strong> <span className="text-right">a min ago</span>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <p className="pr-4">How old are you How old are you How old are you How old are you How old are you How old are you</p> <BsReplyFill size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}

const BoxMessage = ({ id }) => {
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (!id) {
      setStep(1);
    } else {
      setStep(2)
    }
  }, [id])


  return (
    <div className="box-message">
      {step === 1 &&
        <div className="box-all-chat">
          <BoxAllMessage />
          <BoxAllMessage />
          <BoxAllMessage />
          <BoxAllMessage />
          <BoxAllMessage />
          <BoxAllMessage />
        </div>
      }
      {step === 2 &&
        <>
          <div className="box-chat flex-column-reverse d-flex">
            <MyMessage />
            <YourMessage />
            <MyMessage />
            <MyMessage />
            <YourMessage />
          </div>
          <InputChat />
        </>
      }
    </div>
  );
}

export default BoxMessage;