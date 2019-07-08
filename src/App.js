import React, { useState, useCallback } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router';
import { Main } from 'components/layout/Main';
import { Login } from 'containers/Login';
import { MyFeedback } from 'containers/MyFeedback';
import { ShareFeedback } from 'containers/ShareFeedback';
import { TeamFeedback } from 'containers/TeamFeedback';
import { FeedbackWizard } from 'containers/FeedbackWizard';
import { Teams } from 'containers/Teams';
import { Logout } from 'containers/Logout';
import { NotFoundPage } from 'containers/NotFoundPage';
import './App.css';

const App = props => {
  const [auth, setAuth] = useState(true);
  const { push } = props.history;

  const handleLogin = useCallback(() => {
    setAuth(true);
    push('/share-feedback');
  }, [setAuth, push]);

  const handleLogout = useCallback(() => {
    setAuth(false);
    push('/login');
  }, [setAuth, push]);

  return (
    <Main auth={auth}>
      <Switch>
        <Redirect exact from="/index.html" to="/" push />
        <Redirect exact from="/" to="/login" push />

        <Route
          exact
          path="/login"
          render={props => (
            <Login {...props} auth={auth} handleLogin={handleLogin} />
          )}
        />
        <Route exact path="/share-feedback" component={ShareFeedback} />
        <Route exact path="/my-feedback" component={MyFeedback} />
        <Route exact path="/team-feedback" component={TeamFeedback} />
        <Route exact path="/teams" component={Teams} />
        <Route
          exact
          path="/logout"
          render={props => <Logout {...props} onLogout={handleLogout} />}
        />
        <Route
          exact
          path="/wizard/:userId([0-9]+)"
          component={FeedbackWizard}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Main>
  );
};

export default withRouter(App);
