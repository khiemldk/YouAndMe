import React from 'react';
import { Layout, NewsFeed } from 'components'


const newsfeed = ({ props }) => {
  return (
    <Layout>
      <NewsFeed {...props} />
    </Layout>
  );
}

export default newsfeed;