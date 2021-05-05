import React, { useState, useRef } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faListAlt } from '@fortawesome/fontawesome-free-solid';
import { useRouter } from 'next/router';

const list = [
  "Home",
  "NewsFeed",
  "Timeline",
  "All Pages",
]

const MenuItem = ({ text, listItem, index, onClickMenuItem, check }) => {

  const ClickItem = useRef(null);
  const handleMenuClick = () => {
    onClickMenuItem(index)
  }

  return (
    <div>
      <p onClick={handleMenuClick}>{text}
        <FontAwesomeIcon
          icon={faAngleDown} color="#27aae1"
          className="down-icon"
        />
      </p>
      {check[index] &&
        <div ref={ClickItem} className="header__list-item d-flex d-md-block">
          <span>NewsFeed</span>
          <span>My Friends</span>
          <span>Chat Room</span>
          <span>Images</span>
          <span>Videos</span>
        </div>
      }
    </div>
  );
}

const Header = () => {
  const [showDisplay, setShowDisplay] = useState(false);
  const clickBtn = useRef(null);
  const searchRef = useRef(null);
  const [check, setCheck] = useState([false, false, false, false]);
  const router = useRouter();

  const handleClick = () => {
    if (!showDisplay) {
      setShowDisplay(true);
    } else {
      setShowDisplay(false);
    }
  }

  const onClickMenuItem = (index) => {
    const newCheck = [false, false, false, false];
    if (check[index]) {
      document.documentElement.style
        .setProperty('--clickSearch', `-284px`);

      setCheck([false, false, false, false]);
      return;
    }
    document.documentElement.style
      .setProperty('--clickSearch', `-460px`);

    newCheck.splice(index, 1, true);
    setCheck(newCheck)
  }

  return (
    <div className={`grid__full-width header ${router.pathname === "/login" ? "header__customHeaderBg" : ""}`}>
      <div className="grid d-flex ">
        <div className="d-flex header__custom">
          <div className="d-flex header__custom--logo">
            <img src="/88-512.webp" />
            <h2 className="ml-3">You And Me</h2>
          </div>
          <div className={`header__search ${showDisplay ? "" : "d-block"}`} ref={searchRef}>
            <FontAwesomeIcon
              icon={faSearch} color="#fff"
              className="arrow-icon"
            />
            <input type="text" placeholder="Search Friends, Photos, Videos" />
          </div>
        </div>
        {/* ${showDisplay ? "clickBtn" : "d-block clickBtn"} */}
        <div ref={clickBtn} className={`header__cate d-md-flex d-none ${showDisplay ? "clickBtn" : "d-block clickBtn"}`}>
          {list.map((item, index) => (
            <MenuItem
              text={item}
              index={index}
              key={index}
              onClickMenuItem={onClickMenuItem}
              check={check} />
          ))}
          <div className="borderMobile">
            <p>Contact</p>
          </div>
        </div>
        <div className="list-icon mr-3" onClick={handleClick} >
          <FontAwesomeIcon
            icon={faListAlt} color="#27aae1"
            size="4x"
            color="#ddd"
          />
        </div>
      </div>

    </div>
  );
}

export default Header;