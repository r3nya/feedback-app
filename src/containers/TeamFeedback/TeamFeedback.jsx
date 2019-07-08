import React from 'react';
import { inject, observer } from 'mobx-react';
import { FeedbackTopBar } from 'components/FeedbackTopBar';
import { NoFeedback } from 'components/NoFeedback';
import { ShowFeedback } from 'components/ShowFeedback';

const TeamFeedback = ({ teamFeedback }) => {
  const handleUserSelect = userId => teamFeedback.selectUserId(userId);

  return (
    <article>
      {!teamFeedback.isFeedbackExist && <NoFeedback />}

      {teamFeedback.isFeedbackExist && (
        <>
          <FeedbackTopBar title="Team Feedback" />

          <ShowFeedback
            onUserSelect={handleUserSelect}
            users={teamFeedback.items}
            title="Team feedback"
            subTitle="Feedback received"
            payload={teamFeedback.selectedUserData}
            selectedUserId={teamFeedback.selectedUserId}
          />
        </>
      )}
    </article>
  );
};

export default inject('teamFeedback')(observer(TeamFeedback));
