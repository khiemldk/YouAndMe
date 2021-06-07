import React from 'react';
import './style.scss';
import { BsInfoCircle, BsBriefcase, BsChat } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
const Info = () => {
  return (
    <div className="box-about__info">
      <div className="d-flex align-items-center mt-5">
        <BsInfoCircle size="16" className="mr-3" color="#27aae1" /> <h2 className="mb-0">Personal Information</h2>
      </div>
      <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
    </div>
  );
}

const Exp = () => {

  return (
    <div className="box-about__exp">
      <div className="d-flex align-items-center mt-4 mb-3">
        <BsBriefcase size="16" className="mr-3" color="#27aae1" /> <h2 className="mb-0">Work Experiences</h2>
      </div>
      <span>Student</span>
      <p>Seller - Febuary 2013 to present </p>

      <span>Student</span>
      <p>Seller - Febuary 2013 to present </p>

      <span>Student</span>
      <p>Seller - Febuary 2013 to present </p>
    </div>

  );
}

const Location = () => {
  return (
    <div className="box-about__location">
      <div className="d-flex align-items-center mt-4 mb-3">
        <GoLocation size="16" className="mr-3" color="#27aae1" /> <h2 className="mb-0">Location</h2>
      </div>
      <p>228 Park Eve, New York</p>
    </div>
  );
}

const Favorite = () => {
  return (
    <div className="box-about__favorite">
      <div className="d-flex align-items-center mt-4 mb-3">
        <AiOutlineHeart size="16" className="mr-3" color="#27aae1" /> <h2 className="mb-0">Interests</h2>
      </div>
      <p>Reading books</p>
      <p>Listing to music</p>
      <p>Watching movie</p>
      <p>Sports</p>
    </div>
  );
}

const Language = () => {
  return (
    <div className="box-about__chat">
      <div className="d-flex align-items-center mt-4 mb-3">
        <BsChat size="16" className="mr-3" color="#27aae1" /> <h2 className="mb-0">Languages</h2>
      </div>
      <p>Vietnamese</p>
      <p>English</p>
      <p>Spanese</p>
    </div>
  );
}
const BoxAbout = () => {
  return (
    <div className="box-about col-lg-7 col-12">
      <Info />
      <Exp />
      <Location />
      <Favorite />
      <Language />
    </div>
  );
}

export default React.memo(BoxAbout);