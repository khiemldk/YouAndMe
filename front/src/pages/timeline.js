import React from 'react';
import { Layout, TimeLine } from 'components'


const timeline = (props) => {
  return (
    <Layout>
      <TimeLine {...props} />
    </Layout>
  );
}

timeline.getInitialProps = async ({ query }) => {
  const { slug, action, id } = query

  return {
    slug,
    action,
    id,
    namespacesRequired: ['common'],
  }
}

export default timeline;