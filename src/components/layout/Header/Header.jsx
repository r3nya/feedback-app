import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className={styles.logo}>Honesto</span>
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="#"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className={cx('navbar-start', styles.links)}>
          <Link className="navbar-item" to="/share-feedback">
            Share Feedback
          </Link>
          <Link className="navbar-item" to="/my-feedback">
            My Feedback
          </Link>
          <Link className="navbar-item" to="/team-feedback">
            Team Feedback
          </Link>
          <Link className="navbar-item" to="/teams">
            Teams
          </Link>
        </div>

        <div className="navbar-end">TODO</div>
      </div>
    </div>
  </nav>
);

export default Header;
