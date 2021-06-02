import { Activity, BoxPublic, Profile, BoxPost } from 'components';
import React from 'react';
import './style.scss'

const Timeline = () => {
  return (
    <div className=''>
      <Profile />
      <div className="grid d-lg-flex time-line">
        <div className="col-lg-3 col-0 time-line__mt">
        </div>
        <BoxPublic >
          <BoxPost isTimeline />
        </BoxPublic>
        <Activity />
      </div>
    </div>
  );
}

export default Timeline;