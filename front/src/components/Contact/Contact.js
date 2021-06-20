import React from 'react';
import { Form, Input, Radio, Select, Checkbox, Switch } from 'antd';
import { Button } from 'components';
import { UserOutlined, MailFilled, PhoneOutlined } from '@ant-design/icons';
import { BiLocationPlus } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineGlobal,
}
  from "react-icons/ai";
import "./style.scss";

const Contact = ({ }) => {
  const { TextArea } = Input;
  return (
    <div className="contact pt-76 d-flex align-items-center justify-content-center">
      <div className="contact__contents pb-4 pt-5 pl-3 pr-3 d-flex flex-lg-row flex-column mt-5 mb-5">
        <div className="col-lg-8 col-12">
          <strong>Leave a Message</strong>
          <Form name="edit" className="box-edit__form" >
            <Form.Item name="name" className="mb-3" >
              <Input placeholder="Enter your name *" className="mt-2" prefix={<UserOutlined className="prefixInput" />} />
            </Form.Item>
            <Form.Item name="email" className="mb-3" >
              <Input placeholder="Enter your email *" className="mt-2" prefix={<MailFilled className="prefixInput" />} />
            </Form.Item>
            <Form.Item name="phoneNumber" className="mb-3" >
              <Input placeholder="Enter your phone *" className="mt-2" prefix={<PhoneOutlined className="prefixInput" />} />
            </Form.Item>
            <Form.Item name="message" className="mb-3" >
              <TextArea rows={4} placeholder="Leave a message for us *" className="mt-2" />
            </Form.Item>
          </Form>
          <Form.Item className="mt-3">
            <Button type="submit" text="Send a message" classBtn="customClass" />
          </Form.Item>
        </div>
        <div className="col-lg-4 col-12">
          <strong>Reach Us</strong>
          <div className="footer__contact">
            <div className="footer__contact--item">
              <FontAwesomeIcon
                icon={faPhone}
                color="#27aae1"
                className="rotate-icon icon-contact"
              />
              <p>+84 912 879 856</p>
            </div>
            <div className="footer__contact--item">
              <AiOutlineMail size="1.4rem" color="#27aae1" className="icon-contact" />
              <p>+84 912 879 856</p>
            </div>
            <div className="footer__contact--item">
              <BiLocationPlus size="1.6rem" color="#27aae1" className="icon-contact" />
              <p>khiemld28@gmail.com</p>
            </div>
            <div className="mt-3">
              <AiOutlineFacebook size={30} className="social-network-icon" />
              <AiOutlineInstagram size={30} className="social-network-icon" />
              <AiOutlineTwitter size={30} className="social-network-icon" />
              <AiOutlineYoutube size={30} className="social-network-icon" />
              <AiOutlineGlobal size={30} className="social-network-icon" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;