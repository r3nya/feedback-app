import React, { useCallback } from 'react';
import { withRouter } from 'react-router';

import styles from './UserItem.module.scss';

const UserItem = ({ id, avatar, name, history }) => {
  const handleClick = useCallback(() => history.push(`/wizard/${id}`), [
    id,
    history,
  ]);

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <img src={avatar} className={styles.avatar} alt="our happy human" />
        <span>{name}</span>
      </div>
      <button className="button" onClick={handleClick}>
        Press me
      </button>
    </div>
  );
};

export default withRouter(UserItem);
