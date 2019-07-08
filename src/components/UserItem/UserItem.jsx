import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import cx from 'classnames';

import styles from './UserItem.module.scss';

const UserItem = ({
  id,
  avatar,
  name,
  history,
  hideButton = false,
  onClick,
  buttonTitle,
  className,
}) => {
  const handleClick = useCallback(() => history.push(`/wizard/${id}`), [
    id,
    history,
  ]);

  return (
    <div className={cx(styles.root, className)} onClick={onClick}>
      <div className={styles.left}>
        <img src={avatar} className={styles.avatar} alt="our happy human" />
        <span>{name}</span>
      </div>

      {!hideButton && (
        <button className="button" onClick={handleClick}>
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

export default withRouter(UserItem);
