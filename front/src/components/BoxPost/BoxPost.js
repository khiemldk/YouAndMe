import { BoxComment } from 'components';
import React from 'react';
import BoxImage from './component/BoxImage';
import './style.scss';

const BoxPost = ({ isTimeline }) => {
  return (
    <div className='grid box-post'>
      <BoxImage type="2" isTimeline={isTimeline} />
      <BoxImage type="1" isTimeline={isTimeline} />
      <BoxImage type="1" isTimeline={isTimeline} />
    </div>
  );
}

export default React.memo(BoxPost);