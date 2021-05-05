import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import { Header, Footer } from 'components';

const Layout = ({ children }) => {
  return (
    <div className="grid__full-width">
      <Head>
        <meta charSet="utf-8" />
        <title>You and Me</title>
      </Head>
      <main>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;