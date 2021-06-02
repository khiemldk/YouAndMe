import React from 'react';
import { Layout, TimeLine } from 'components'


const timeline = (props) => {
  return (
    <Layout>
      <TimeLine {...props} />
    </Layout>
  );
}

export default timeline;