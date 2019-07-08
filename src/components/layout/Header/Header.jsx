import React from 'react';
import cx from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styles from './Header.module.scss';

const Header = ({ myFeedback }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className={styles.logo}>Honesto</span>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className={cx('navbar-start', styles.links)}>
          <NavLink
            className="navbar-item"
            to="/share-feedback"
            activeClassName="is-active is-active-link"
          >
            <span
              className="has-badge-rounded has-badge-honesto"
              data-badge={myFeedback.totalUsers}
            >
              Share Feedback
            </span>
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/my-feedback"
            activeClassName="is-active is-active-link"
          >
            <span
              className="has-badge-rounded has-badge-honesto"
              data-badge={myFeedback.totalUsersWithMyFeedback}
            >
              My Feedback
            </span>
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/team-feedback"
            activeClassName="is-active is-active-link"
          >
            Team Feedback
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/teams"
            activeClassName="is-active is-active-link"
          >
            Teams
          </NavLink>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/logout">
            Logout
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default inject('myFeedback')(observer(Header));
