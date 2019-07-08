import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router';
import { ScrollTop } from 'components/ScrollTop';
import { Header } from '../Header';
// import { Footer } from '../Footer';

const Main = ({ auth, children, history }) => {
  const redirectToLogin = useCallback(() => history.push('/login'), [history]);

  useEffect(() => {
    if (!auth) {
      redirectToLogin();
    }
  }, [auth, redirectToLogin]);

  return (
    <ScrollTop>
      {auth && <Header />}

      <main className={auth ? 'container' : ''}>{children}</main>

      {/** TODO: Add footer <Footer /> */}
    </ScrollTop>
  );
};

export default withRouter(Main);
