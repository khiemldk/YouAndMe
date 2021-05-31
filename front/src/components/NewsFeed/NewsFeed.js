import { SuggesFriends, BoxPublic } from 'components';
import React from 'react';
import './style.scss';

const NewsFeed = () => {
  return (
    <div className="pt-76">
      <div className="grid d-md-flex">
        <div className="col-md-3 col-0">
        </div>
        <BoxPublic >

        </BoxPublic>
        <SuggesFriends />
      </div>
    </div>
  );
}

export default NewsFeed;