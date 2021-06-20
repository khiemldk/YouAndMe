import React, { useState } from 'react';
import './style.scss'
import { BsCheckCircle, BsBook, BsBriefcase } from "react-icons/bs";
import { Form, Input, Radio, Select, Checkbox, Switch } from 'antd';
import { Button } from 'components';
import { CommonApi } from 'api/CommonApi';
import { AiOutlineHeart, AiOutlineSetting, AiOutlineLock } from "react-icons/ai";

const BasicInfo = () => {
  const { Option } = Select;
  const { TextArea } = Input;

  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="box-edit__basic-info mt-5">
      <h2 className="pb-4"><BsCheckCircle size={20} color="#27aae1" className="mr-4" />Edit basic information</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <Form name="edit" className="box-edit__form " onFinish={onSubmit}>
        <div className="d-flex">
          <div className="col-6 pl-0">
            <strong>First Name</strong>
            <Form.Item name="fristName" className="mb-3">
              <Input className="mt-2" />
            </Form.Item>
          </div>
          <div className="col-6 pr-0">
            <strong>Last Name</strong>
            <Form.Item name="lastName" className="mb-3">
              <Input className="mt-2" />
            </Form.Item>
          </div>
        </div>
        <strong>Email</strong>
        <Form.Item name="email" className="mb-3">
          <Input className="mt-2" />
        </Form.Item>
        <strong >Date of Birdth</strong>
        <div className="grid d-flex mt-2 flex-wrap">
          <Form.Item name="day" className="col-6 pl-0 mb-3 col-lg-3 mr-4 mr-lg-0">
            <Select placeholder="Day" className="box-edit__form--select ">
              {
                CommonApi.days.map(item => (
                  <Option key={item} value={item + 1}>{item + 1}</Option>
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item name="month" className="col-6 pl-0 mb-3 col-lg-3 mr-n4 mr-lg-0">
            <Select placeholder="Month" className="box-edit__form--select ">
              {
                CommonApi.months.map(item => (
                  <Option key={item} value={item + 1}>{item + 1}</Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item name="year" className="col-12 pr-0 mb-3 col-lg-6 pl-0 pl-lg-4">
            <Select placeholder="Year" className="box-edit__form--select ">
              {
                CommonApi.years.map(item => (
                  <Option key={item} value={item + 1980}>{item + 1980}</Option>
                ))
              }
            </Select>
          </Form.Item>
        </div>
        <div className="d-flex align-items-center">
          <strong>I am a: &nbsp;&nbsp;&nbsp;</strong>
          <Form.Item name="gender" className="m-0">
            <Radio.Group>
              <Radio value="1" >Male</Radio>
              <Radio value="0">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="d-flex mt-4">
          <div className="col-6 pl-0">
            <strong>My city </strong>
            <Form.Item name="city" className="mb-3 ">
              <Input className="mt-2" />
            </Form.Item>
          </div>
          <div className="col-6 pr-0">
            <strong>Country </strong>
            <Form.Item name="country" >
              <Select placeholder="Country" className="mt-2 box-edit__form--select">
                {
                  CommonApi.years.map(item => (
                    <Option key={item} value={item + 1980}>{item + 1980}</Option>
                  ))
                }
              </Select>
            </Form.Item>
          </div>
        </div>
        <strong>About me</strong>
        <Form.Item name="description">
          <TextArea rows={4} placeholder="Something about you" />
        </Form.Item>
        <Form.Item>
          <Button type="submit" text="Saves Changes" classBtn="customClass" />
        </Form.Item>
      </Form>

    </div>

  );
}

const EducationAndWork = () => {
  const { TextArea } = Input;
  return (
    <div className="box-edit__education mt-5">
      <h2 className="pb-4"><BsBook size={20} color="#27aae1" className="mr-4" />My Education</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <Form name="universityInfo" className="box-edit__form ">
        <strong>My university</strong>
        <Form.Item name="university" className="mb-3">
          <Input className="mt-2" />
        </Form.Item>
        <div className="d-flex">
          <div className="col-6 pl-0">
            <strong>From</strong>
            <Form.Item name="startDay" className="mb-3">
              <Input className="mt-2" />
            </Form.Item>
          </div>
          <div className="col-6 pr-0">
            <strong>To</strong>
            <Form.Item name="endDay" className="mb-3">
              <Input className="mt-2" />
            </Form.Item>
          </div>
        </div>
        <strong>Description</strong>
        <Form.Item name="description" className="mb-3">
          <TextArea rows={4} placeholder="Something about your Education" />
        </Form.Item>
        <div className="d-flex align-items-center">
          <strong>Graduated? : &nbsp;&nbsp;&nbsp;</strong>
          <Form.Item name="graduated" className="mb-0" valuePropName="checked">
            <Checkbox >Yes</Checkbox>
          </Form.Item>
        </div>
        <Form.Item className="mt-4">
          <Button type="submit" text="Saves Changes" classBtn="customClass" />
        </Form.Item>
      </Form>
      <h2 className="pb-4"><BsBriefcase size={20} color="#27aae1" className="mr-4" />Works Experiences</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <Form name="work" className="box-edit__form ">
        <strong>Company</strong>
        <Form.Item name="company" className="mb-3">
          <Input className="mt-2" />
        </Form.Item>
        <strong>Designation</strong>
        <Form.Item name="designation" className="mb-3">
          <Input className="mt-2" />
        </Form.Item>
        <div className="d-flex">
          <div className="col-6 pl-0">
            <strong>From</strong>
            <Form.Item name="startDay" className="mb-3">
              <Input className="mt-2" />
            </Form.Item>
          </div>
          <div className="col-6 pr-0">
            <strong>To</strong>
            <Form.Item name="endDay" className="mb-3">
              <Input className="mt-2" />
            </Form.Item>
          </div>
        </div>
        <strong>City/Town</strong>
        <Form.Item name="city" className="mb-3">
          <Input className="mt-2" />
        </Form.Item>
        <strong>Description</strong>
        <Form.Item name="description" className="mb-3">
          <TextArea rows={4} placeholder="Something about your Education" />
        </Form.Item>
        <Form.Item className="mt-4">
          <Button type="submit" text="Saves Changes" classBtn="customClass" />
        </Form.Item>
      </Form>
    </div>
  );
}

const BoxInteres = () => {
  return (
    <div className="box-edit__interes mt-5">
      <h2 className="pb-4"><AiOutlineHeart size={20} color="#27aae1" className="mr-4" />Interest</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <div className="box-edit__interes--item mt-4">
        <Button type="submit" text="Bycircle" classBtn="customInteres" />
        <Button type="submit" text="Photograph" classBtn="customInteres" />
        <Button type="submit" text="Listen to music" classBtn="customInteres" />
        <Button type="submit" text="Shoping" classBtn="customInteres" />
        <Button type="submit" text="Eating" classBtn="customInteres" />
      </div>
      <strong>City/Town</strong>
      <div className="d-block d-lg-flex justify-content-between">
        <Input placeholder="Your Interes" className="col-12 col-lg-8 mb-3 mt-2" /> <Button type="submit" text="Add" classBtn="mt-2 col-lg-3 col-12 mb-3" />
      </div>
    </div>
  );
}

const BoxSettings = ({ checked }) => {
  const [isCheckFollow, setIsCheckFollow] = useState(checked);
  const [isCheckNoti, setIsCheckNoti] = useState(checked);
  const [isCheckMessage, setIsCheckMessage] = useState(checked);
  const [isCheckTag, setIsCheckTag] = useState(checked);
  const [isCheckSound, setIsCheckSound] = useState(checked);

  const handleFollow = () => {
    setIsCheckFollow(!isCheckFollow)
  }

  const handleNoti = () => {
    setIsCheckNoti(!isCheckNoti)
  }

  const handleMessage = () => {
    setIsCheckMessage(!isCheckMessage)
  }

  const handleTag = () => {
    setIsCheckTag(!isCheckTag)
  }

  const handleSound = () => {
    setIsCheckSound(!isCheckSound)
  }
  return (
    <div className="box-edit__settings mt-5">
      <h2 className="pb-4"><AiOutlineSetting size={20} color="#27aae1" className="mr-4" />Interest</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <div className="pb-4 pt-3 box-edit__settings--item d-flex justify-content-between align-items-center">
        <div>
          <strong>Enale follow me</strong><br />
          <span>Enable this if you want people to follow you</span>
        </div>
        <Switch className={!isCheckFollow ? "customSwitch" : ""} onChange={(handleFollow)} />
      </div>
      <div className="pb-4 pt-3 box-edit__settings--item d-flex justify-content-between align-items-center">
        <div>
          <strong>Send me notifications</strong><br />
          <span>Send me notification emails my friends like, share or message me</span>
        </div>
        <Switch className={!isCheckNoti ? "customSwitch" : ""} onChange={(handleNoti)} />
      </div>
      <div className="pb-4 pt-3 box-edit__settings--item d-flex justify-content-between align-items-center">
        <div>
          <strong>Text messages</strong><br />
          <span>Send me messages to my cell phone</span>
        </div>
        <Switch className={!isCheckMessage ? "customSwitch" : ""} onChange={(handleMessage)} />
      </div>
      <div className="pb-4 pt-3 box-edit__settings--item d-flex justify-content-between align-items-center">
        <div>
          <strong>Enable tagging</strong><br />
          <span>Enable my friends to tag me on their posts</span>
        </div>
        <Switch className={!isCheckTag ? "customSwitch" : ""} onChange={(handleTag)} />
      </div>
      <div className="pb-4 pt-3 box-edit__settings--item d-flex justify-content-between align-items-center">
        <div>
          <strong>Enable sound</strong><br />
          <span>You'll hear notification sound when someone sends you a private message</span>
        </div>
        <Switch className={!isCheckSound ? "customSwitch" : ""} onChange={(handleSound)} />
      </div>
    </div>
  );
}

const BoxChangePassword = () => {
  return (
    <div className="box-edit__changepassword mt-5">
      <h2 className="pb-4"><AiOutlineLock size={20} color="#27aae1" className="mr-4" />Change Password</h2>
      <p className="mt-4 pb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
      <Form name="edit" className="box-edit__form " >
        <strong>Old Password</strong>
        <Form.Item name="password" className="mb-3">
          <Input.Password className="mt-2" />
        </Form.Item>
        <div className="d-flex">
          <div className="col-6 pl-0">
            <strong>New Password</strong>
            <Form.Item name="newPassword" className="mb-3">
              <Input.Password className="mt-2" />
            </Form.Item>
          </div>
          <div className="col-6 pr-0">
            <strong>Confirm Password</strong>
            <Form.Item name="confirmPassword" className="mb-3"
              dependencies={['newPassword']}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Confirm password is not correctly, Enter Again'));
                  },
                }),
              ]}
            >
              <Input.Password className="mt-2" />
            </Form.Item>
          </div>
        </div>
        <a >Forgot Password</a>
        <Form.Item className="mt-3">
          <Button type="submit" text="Update Password" classBtn="customClass" />
        </Form.Item>
      </Form>
    </div>
  );
}


const BoxEdit = ({ action }) => {
  return (
    <div className="box-edit col-lg-7 col-12">
      {action === "basicinfo" &&
        <BasicInfo />
      }
      {action === "educationandwork" &&
        <EducationAndWork />
      }
      {action === "interest" &&
        <BoxInteres />
      }
      {action === "settings" &&
        <BoxSettings checked />
      }
      {action === "changepassword" &&
        <BoxChangePassword />
      }
    </div>
  );
}

export default BoxEdit;