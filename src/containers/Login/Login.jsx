import React, { useEffect } from 'react';
import styles from './Login.module.scss';
import logo from './logo.svg';

const Login = ({ auth, handleLogin, history }) => {
  useEffect(() => {
    if (auth) {
      history.push('/share-feedback');
    }
  }, [auth, history]);

  return (
    <article className={styles.background}>
      <form className={styles.form}>
        <img src={logo} className={styles.logo} alt="logo" />

        <h4 className="title is-4">Honesto</h4>

        <hr className={styles.divider} />

        <button type="button" className="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </article>
  );
};

export default Login;
