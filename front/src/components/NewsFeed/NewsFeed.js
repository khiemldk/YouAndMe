import { BoxMessage, SuggesFriends, BoxPublic, BoxPost, MenuNews, BoxOnline, BoxCard, BoxPeopleNear, BoxFriend, ListNewsfeed } from 'components';
import React from 'react';
import './style.scss';

const NewsFeed = ({ slug, id }) => {

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
          {slug === "friends" &&
            <BoxFriend />
          }
          {slug === "images" &&
            <ListNewsfeed type="1" />
          }
          {slug === "videos" &&
            <ListNewsfeed type="2" />
          }
          {slug === "messages" &&
            <BoxMessage id={id} />
          }
        </BoxPublic>
        <SuggesFriends />
      </div>
    </div>
  );
}

export default NewsFeed;