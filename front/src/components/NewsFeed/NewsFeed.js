import { SuggesFriends, BoxPublic, BoxPost, MenuNews, BoxOnline, BoxCard, BoxPeopleNear } from 'components';
import React from 'react';
import './style.scss';

const NewsFeed = ({ slug }) => {
  console.log(slug);
  return (
    <div className="pt-76">
      <div className="grid d-lg-flex newfeed">
        <div className="col-lg-3 col-0">
          <BoxCard />
          <MenuNews />
          <BoxOnline />
        </div>
        <BoxPublic >
          {!slug &&
            <BoxPost type="2" />
          }
          {slug === "people-near" &&
            <BoxPeopleNear />
          }
        </BoxPublic>
        <SuggesFriends />
      </div>
    </div>
  );
}

export default NewsFeed;