import React from 'react';
import { Login, Layout } from 'components';
function login(props) {
  return (
    <Layout customHeaderBg="customHeaderBg">
      <Login {...props} />
    </Layout>
  );
}
login.getInitialProps = async ({ pathName, ctx, query }) => {
  return {
    pathName,
  }
}
export default login;