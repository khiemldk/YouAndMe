import React from 'react';
import './style.scss';
import { Input } from 'components';
import { Link } from 'routers';

const BoxComment = () => {
  return (
    <div className="box-comment">
      <div className='grid box-comment__item d-flex mt-4'>
        <img src='http://placehold.it/300x300' className='mr-3' />
        <div className='box-comment__content d-flex mr-5'>
          <p className='text-justify'>
            <Link route="/timeline?id=12">
              <a>
                <strong className='mr-3'>Khanh chi</strong>
              </a>
            </Link>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
      </div>
      <div className='grid box-comment__item d-flex mt-4'>
        <img src='http://placehold.it/300x300' className='mr-3' />
        <div className='box-comment__content d-flex mr-5'>
          <p className='text-justify'><strong className='mr-3'>Khanh chi</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        </div>
      </div>
      <div className="box-comment__input mt-4 d-flex mr-5 align-items-center">
        <img src='http://placehold.it/300x300' className='mr-3' />
        <Input type='text' text="post a comment" />
      </div>
    </div>
  );
}

export default BoxComment;