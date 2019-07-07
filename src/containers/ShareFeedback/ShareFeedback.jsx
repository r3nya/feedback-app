import React from 'react';
import { FeedbackTopBar } from 'components/FeedbackTopBar';
import { UserItem } from 'components/UserItem';
import styles from './ShareFeedback.module.scss';
import { users } from 'stores/data';

const ShareFeedback = () => {
  return (
    <article className={styles.root}>
      <div className="level header-container">
        <FeedbackTopBar title="Share Feedback" />
      </div>

      <div className={styles.list}>
        {/** TODO: get data from store */}
        {users.map(user => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    </article>
  );
};

export default ShareFeedback;

// TODO: Button – isFilled ? "View Submission" : "Fill Out"
