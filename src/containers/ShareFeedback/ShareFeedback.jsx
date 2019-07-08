import React from 'react';
import { inject, observer } from 'mobx-react';
import { FeedbackTopBar } from 'components/FeedbackTopBar';
import { UserItem } from 'components/UserItem';
import styles from './ShareFeedback.module.scss';

@inject('myFeedback')
@observer
class ShareFeedback extends React.Component {
  render() {
    const { myFeedback } = this.props;

    return (
      <article className={styles.root}>
        <FeedbackTopBar title="Share Feedback" />

        <div className={styles.list}>
          {myFeedback.users.map(user => (
            <UserItem key={user.id} {...user} buttonTitle="Fill out" />
          ))}
        </div>
      </article>
    );
  }
}

export default ShareFeedback;

// TODO: Button – isFilled ? "View Submission" : "Fill Out"
