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
  const { slug, action } = query

  return {
    slug,
    action,
    namespacesRequired: ['common'],
  }
}

export default timeline;