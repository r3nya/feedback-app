import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { ScrollTop } from 'components/ScrollTop';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Main = ({ auth, children, history }) => {
  useEffect(() => {
    if (!auth) {
      history.push('/login');
    }
  }, []);

  return (
    <ScrollTop>
      {auth && <Header />}

      <main className="container">{children}</main>

      {/** TODO: Add footer <Footer /> */}
    </ScrollTop>
  );
};

export default withRouter(Main);
