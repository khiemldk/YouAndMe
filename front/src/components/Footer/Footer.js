import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { useRouter } from 'next/router';
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineGlobal,
}
  from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";

const CateItem = () => {
  return (
    <div className="col-lg-2">
      <h3>For individuals</h3>
      <div className="footer__list-cate">
        <a><p>Sign Up</p></a>
        <a><p>Login</p></a>
        <a><p>Explore</p></a>
        <a><p>YouAndMe App</p></a>
        <a><p>Features</p></a>
        <a><p>Settings</p></a>
      </div>
    </div>
  )
}

const Footer = () => {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== "/" &&
        < div className="grid__full-width" >
          {/* <div className={`grid__full-width ${router.pathname === "/login" ? "d-none" : ""}`}> */}
          <div className="grid" >
            <div className="footer d-flex flex-lg-row flex-column">
              <div className="col-lg-3">
                <div className="footer__logo">
                  <img src="/88-512.webp" />
                  <h2 className="ml-3">You And Me</h2>
                </div>
                <div className="footer__social-network">
                  <AiOutlineFacebook size="3rem" className="social-network-icon" />
                  <AiOutlineInstagram size="3rem" className="social-network-icon" />
                  <AiOutlineTwitter size="3rem" className="social-network-icon" />
                  <AiOutlineYoutube size="3rem" className="social-network-icon" />
                  <AiOutlineGlobal size="3rem" className="social-network-icon" />
                </div>
              </div>
              <CateItem />
              <CateItem />
              <CateItem />
              <div className="col-lg-3">
                <h3>Contact us</h3>
                <div className="footer__contact">
                  <div className="footer__contact--item">
                    <FontAwesomeIcon
                      icon={faPhone}
                      color="#27aae1"
                      className="contact-icon rotate-icon"
                    />
                    <p>+84 912 879 856</p>
                  </div>
                  <div className="footer__contact--item">
                    <AiOutlineMail size="1.4rem" color="#27aae1" />
                    <p>+84 912 879 856</p>
                  </div>
                  <div className="footer__contact--item">
                    <BiLocationPlus size="1.6rem" color="#27aae1" />
                    <p>khiemld28@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p>Copyright By KhiemLDK - You And Me</p>
          </div>
        </div >
      }
    </div>
  );
}

export default Footer;