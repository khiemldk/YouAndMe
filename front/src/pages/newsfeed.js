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
  const { slug, id } = query

  return {
    id,
    slug,
    namespacesRequired: ['common'],
  }
}
export default newsfeed;