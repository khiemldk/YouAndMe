import { Activity, BoxPublic, Profile } from 'components';
import React from 'react';

const Timeline = () => {
  return (
    <div className=''>
      <Profile />
      <div className="grid d-md-flex">
        <div className="col-3">
        </div>
        <BoxPublic />
        <Activity />
      </div>
    </div>
  );
}

export default Timeline;