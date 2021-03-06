import React from 'react';
import './style.scss';
import { BsInfoCircle, BsBriefcase } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSetting, AiOutlineLock } from "react-icons/ai";
import { Link } from "routers";

const BoxMenuEdit = () => {
  return (
    <div className="box-menu-edit">
      <Link route="/timeline/info?action=basicinfo">
        <a>
          <p className="pb-4 mt-4 pl-4 pr-4 active-edit"><BsInfoCircle size={14} className="mr-4" /> Basic Information</p>
        </a>
      </Link>

      <Link route="/timeline/info?action=educationandwork">
        <a>
          <p className="pb-4 mt-4 pl-4 pr-4"><BsBriefcase size={14} className="mr-4" /> Education and Work</p>
        </a>
      </Link>
      <Link route="/timeline/info?action=interest">
        <a>
          <p className="pb-4 mt-4 pl-4 pr-4"><AiOutlineHeart size={14} className="mr-4" /> My Interests</p>

        </a>
      </Link>
      <Link route="/timeline/info?action=settings">
        <a>
          <p className="pb-4 mt-4 pl-4 pr-4"><AiOutlineSetting size={14} className="mr-4" /> Account Settings</p>

        </a>
      </Link>
      <Link route="/timeline/info?action=changepassword">
        <a>
          <p className="pb-4 mt-4 pl-4 pr-4"><AiOutlineLock size={14} className="mr-4" /> Change Password</p>

        </a>
      </Link>
    </div>
  );
}

export default BoxMenuEdit;