import React from 'react';
import cx from 'classnames';
import { UserItem } from 'components/UserItem';
import { Viewer } from 'components/Viewer';
import styles from './ShowFeedback.module.scss';

const ShowFeedback = ({
  onUserSelect,
  users,
  payload,
  title,
  subTitle,
  selectedUserId,
}) => (
  <div className={cx('columns is-gapless', styles.main)}>
    <div className={cx('column is-one-third', styles.firstBlock)}>
      <div className="column">
        <h6 className="title h-small-text">{subTitle}</h6>
      </div>

      {users.map((item, idx) => (
        <UserItem
          key={idx}
          {...item.userProfile}
          className={cx({
            [styles.userSelected]: item.userProfile.id === selectedUserId,
          })}
          hideButton
          onClick={() => onUserSelect(item.userProfile.id)}
        />
      ))}
    </div>

    <div className={cx('column', styles.rightBlock)}>
      <div className="column">
        <h5 className="title is-5">{title}</h5>
        {!payload && <h6 className="title is-6">Please select user</h6>}
      </div>

      {payload &&
        payload.questions.map(item => <Viewer key={item.id} {...item} />)}
    </div>
  </div>
);

export default ShowFeedback;
