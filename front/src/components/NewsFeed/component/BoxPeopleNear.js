import React from 'react';
import { Button } from 'components';
import './style.scss';
import GoogleMapReact from 'google-map-react'
const PeopleNearItem = () => {
  return (
    <div className="people-near__item d-flex flex-lg-row flex-column justify-content-between pb-4 mr-4 ml-4 mb-5">
      <div className="people-near__info d-flex m-lg-0 m-auto">
        <img src="http://placehold.it/300x300" />
        <div className="ml-4">
          <p className="people-near__info--name"><strong>Hong Nhan</strong></p>
          <p className="people-near__info--job">Student</p>
          <p className="people-near__info--distance">400km away</p>
        </div>
      </div>
      <Button text="Add friend" classBtn="custom-class" />
    </div>
  )
}
const center = {
  lat: 59.95,
  lng: 30.33
}
const BoxPeopleNear = () => {
  return (
    <div className="people-near grid">
      <PeopleNearItem />
      <PeopleNearItem />
      <PeopleNearItem />
      <PeopleNearItem />
      <PeopleNearItem />
      <PeopleNearItem />
      <PeopleNearItem />
    </div>
  );
}

export default BoxPeopleNear;