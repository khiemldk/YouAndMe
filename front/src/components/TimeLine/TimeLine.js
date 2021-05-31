import { Activity, BoxPublic, Profile, BoxPost } from 'components';
import React from 'react';

const Timeline = () => {
  return (
    <div className=''>
      <Profile />
      <div className="grid d-md-flex">
        <div className="col-md-3 col-0">
        </div>
        <BoxPublic >
          <BoxPost />
        </BoxPublic>
        <Activity />
      </div>
    </div>
  );
}

export default Timeline;