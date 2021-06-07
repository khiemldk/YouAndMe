import React from 'react';
import './style.scss'
import { BsCheckCircle } from "react-icons/bs";

const BasicInfo = () => {
  return (
    <div className="box-edit__basic-info mt-5">
      <h2 className="pb-4"><BsCheckCircle size={20} color="#27aae1" className="mr-4" />Edit basic information</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <div className="box-edit__form d-flex">

      </div>
    </div>

  );
}

const BoxEdit = () => {
  return (
    <div className="box-edit col-lg-7 col-12">
      <BasicInfo />
    </div>
  );
}

export default BoxEdit;