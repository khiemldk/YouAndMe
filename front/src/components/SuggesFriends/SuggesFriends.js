import React from 'react';
import { Link } from 'routers';
import './style.scss';

const SuggesFriends = () => {
  return (
    <div className="col-lg-2 col-12 mt-5 sugges-friends">
      <h3>Who to follow</h3>
      <div className="sugges-friends__item d-flex mt-4">
        <img src="/static/imgs/300x300.png" className="mr-4" />
        <div>
          <Link route="/timeline?id=12">
            <a>
              <p ><strong>Khanh Chi</strong></p>
            </a>
          </Link>
          <p >Add friend</p>
        </div>
      </div>

      <div className="sugges-friends__item d-flex mt-4">
        <img src="/static/imgs/300x300.png" className="mr-4" />
        <div>
          <p ><strong>Khanh Chi</strong></p>
          <p >Add friend</p>
        </div>
      </div>

      <div className="sugges-friends__item d-flex mt-4">
        <img src="/static/imgs/300x300.png" className="mr-4" />
        <div>
          <p ><strong>Khanh Chi</strong></p>
          <p >Add friend</p>
        </div>
      </div>

      <div className="sugges-friends__item d-flex mt-4">
        <img src="/static/imgs/300x300.png" className="mr-4" />
        <div>
          <p ><strong>Khanh Chi</strong></p>
          <p >Add friend</p>
        </div>
      </div>

      <div className="sugges-friends__item d-flex mt-4">
        <img src="/static/imgs/300x300.png" className="mr-4" />
        <div>
          <p ><strong>Khanh Chi</strong></p>
          <p >Add friend</p>
        </div>
      </div>
    </div>
  );
}

export default SuggesFriends;