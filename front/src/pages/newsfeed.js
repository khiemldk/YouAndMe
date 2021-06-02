import React from 'react';
import { Layout, NewsFeed } from 'components'


const newsfeed = (props) => {
  return (
    <Layout>
      <NewsFeed {...props} />
    </Layout>
  );
}

newsfeed.getInitialProps = async ({ query }) => {
  const { slug } = query

  return {

    slug,
    namespacesRequired: ['common'],
  }
}
export default newsfeed;