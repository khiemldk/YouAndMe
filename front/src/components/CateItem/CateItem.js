import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/fontawesome-free-solid';

const CateItem = ({ content }) => {
  return (
    <a>
      <FontAwesomeIcon
        icon={faArrowDown} color="#fff"
        className="arrow-icon"
      />{content}
    </a>
  );
}

export default CateItem;