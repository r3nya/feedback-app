import React from 'react';
import { FeedbackTopBar } from 'components/FeedbackTopBar';
import { NoFeedback } from 'components/NoFeedback';

const MyFeedback = () => {
  return (
    <article>
      <FeedbackTopBar title="My Feedback" />
      <h1>My fff</h1>

      <NoFeedback />
    </article>
  );
};

export default MyFeedback;
