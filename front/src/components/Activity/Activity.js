import React from 'react';
import './style.scss'

const list = [
  {
    name: 'Khiem',
    status: 'Has posted a photo',
    time: '5 minutes ago'
  },
  {
    name: 'Nhan',
    status: 'Commented on a Photo',
    time: 'an hour ago'
  },
  {
    name: 'Chi',
    status: "Liked her friend's post",
    time: '4 hours ago'
  },
  {
    name: 'Binh',
    status: 'Has posted a photo',
    time: 'a day ago'
  },
  {
    name: 'An',
    status: 'Has share a photo',
    time: '2 days ago'
  }
]

const Activity = () => {
  return (
    <div className='col-lg-2 col-12 mt-5 activity'>
      <h3>Khiem's activity</h3>
      <div className='activity__list'>
        {list.map((item, index) => (
          <div className='activity__item mb-4 pb-3' key={index}>
            <p className='pl-4 pb-0'><strong>{item.name} &nbsp;</strong>{item.status}</p>
            <span className='pl-4'>{item.time}</span>
          </div>
        ))

        }
      </div>
    </div>
  );
}

export default React.memo(Activity);