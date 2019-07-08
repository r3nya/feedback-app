import React from 'react';
import { inject, observer } from 'mobx-react';

import { FeedbackTopBar } from 'components/FeedbackTopBar';
import { NoFeedback } from 'components/NoFeedback';
import { ShowFeedback } from 'components/ShowFeedback';

@inject('myFeedback')
@observer
class MyFeedback extends React.Component {
  handleUserSelect = userId => {
    this.props.myFeedback.selectUserId(userId);
  };

  render() {
    const { myFeedback } = this.props;

    return (
      <article>
        {!myFeedback.isMyFeedbackExist && <NoFeedback />}

        {myFeedback.isMyFeedbackExist && (
          <>
            <FeedbackTopBar title="My Feedback" hidePublishButton={false} />

            <ShowFeedback
              onUserSelect={this.handleUserSelect}
              users={myFeedback.myFeedback}
              title="Your feedback"
              subTitle="Feedback submitted"
              payload={myFeedback.selectedUserData}
              selectedUserId={myFeedback.selectedUserId}
            />
          </>
        )}
      </article>
    );
  }
}

export default MyFeedback;
