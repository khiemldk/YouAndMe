import React, { useState, useRef } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faListAlt } from '@fortawesome/fontawesome-free-solid';
import { useRouter } from 'next/router';
import { Link } from 'routers';
const list = [
  "Home",
  "NewsFeed",
  "Timeline",
  "All Pages",
]
const listHome = [
  { text: "Login", link: "/" },
  { text: "Sign Up", link: "/signup" },

]

const listNewsFeed = [
  { text: "NewsFeed", link: "/newsfeed" },
  { text: "People Near", link: "/newsfeed/people-near" },
  { text: "Friends", link: "/newsfeed/friends" },
  { text: "Chat room", link: "/newsfeed/messages" },
  { text: "Images", link: "/newsfeed/images" },
  { text: "Videos", link: "/newsfeed/videos" },

]

const listTimeLine = [
  { text: "Timeline", link: "/timeline" },
  { text: "About", link: "/timeline/about" },
  { text: "Album", link: "/timeline/album" },
  { text: "Friends", link: "/timeline/friends" },
  { text: "Edit: Basic Info", link: "/timeline/info?action=basicinfo" },
  { text: "Work", link: "/timeline/info?action=educationandwork" },
  { text: "My Interes", link: "/timeline/info?action=interest" },
  { text: "Account Settings", link: "/timeline/info?action=settings" },
  { text: "Change Password", link: "/timeline/info?action=changepassword" },

]
const MenuItem = ({ text, listItem, index, onClickMenuItem, check, listMenu, handleMenuMobile }) => {

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
        <div ref={ClickItem} className="header__list-item d-flex d-lg-block">
          {listMenu.map((item, index) => (
            <Link route={item.link}>
              <a onClick={handleMenuMobile}>
                <span>{item.text}</span>
              </a>
            </Link>
          ))}

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

  const handleMenuMobile = () => {
    setShowDisplay(false)
  }

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
    const heightSearch = index === 0 ? "-350px" : index === 1 ? "-493px" : "-596px";
    document.documentElement.style
      .setProperty('--clickSearch', heightSearch);

    newCheck.splice(index, 1, true);
    setCheck(newCheck)
  }

  return (
    <div className={`grid__full-width header ${router.pathname === "/" ? "header__customHeaderBg" : ""}`}>
      <div className="grid d-flex ">
        <div className="d-flex header__custom">
          <Link route="/newsfeed">
            <a>
              <div className="d-flex header__custom--logo">
                <img src="/88-512.webp" />
                <h2 className="ml-3">You And Me</h2>
              </div>
            </a>
          </Link>
          <div className={`header__search ${showDisplay ? "d-block" : ""}`} ref={searchRef}>
            <FontAwesomeIcon
              icon={faSearch} color="#fff"
              className="arrow-icon"
            />
            <input type="text" placeholder="Search Friends, Photos, Videos" />
          </div>
        </div>
        {/* ${showDisplay ? "clickBtn" : "d-block clickBtn"} */}
        <div ref={clickBtn} className={`header__cate d-lg-flex d-none ${showDisplay ? "d-block clickBtn" : "clickBtn"}`}>
          {list.map((item, index) => (
            <MenuItem
              text={item}
              index={index}
              key={index}
              onClickMenuItem={onClickMenuItem}
              check={check}
              listMenu={item === "Home" ? listHome : item === "NewsFeed" ? listNewsFeed : listTimeLine}
              handleMenuMobile={handleMenuMobile}
            />
          ))}
          <div className="borderMobile">
            <Link route="/contact">
              <a>
                <p>Contact</p>
              </a>
            </Link>
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