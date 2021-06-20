import React from 'react';
import { Contact, Layout } from 'components';
function contact(props) {
  return (
    <Layout customHeaderBg="customHeaderBg">
      <Contact {...props} />
    </Layout>
  );
}
contact.getInitialProps = async ({ pathName, ctx, query }) => {
  return {
    pathName,
  }
}
export default contact;