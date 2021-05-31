import { BoxComment } from 'components';
import React from 'react';
import BoxImage from './component/BoxImage';
import './style.scss';

const BoxPost = () => {
  return (
    <div className='grid box-post'>
      <BoxImage />
      <BoxImage />
      <BoxImage />
    </div>
  );
}

export default React.memo(BoxPost);