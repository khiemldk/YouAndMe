import { Activity, BoxPublic, Profile, BoxPost, BoxAbout, BoxAlbum, BoxFriend, BoxEdit, BoxMenuEdit } from 'components';
import React from 'react';
import './style.scss'

const Timeline = ({ slug }) => {
  return (
    <div className=''>
      <Profile />
      <div className="grid d-lg-flex time-line">
        <div className="col-lg-3 col-0 time-line__mt">
          {slug === "info" &&
            <BoxMenuEdit />
          }
        </div>
        {!slug &&
          <BoxPublic >
            <BoxPost isTimeline />
          </BoxPublic>
        }
        {slug === "about" &&
          <BoxAbout />
        }
        {slug === "album" &&
          <BoxAlbum />
        }
        {slug === 'friends' &&
          <div className="mt-5">
            <BoxFriend />
          </div>
        }
        {slug === "info" &&
          <BoxEdit />
        }
        <Activity />
      </div>
    </div>
  );
}

export default Timeline;