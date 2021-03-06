import React from 'react';

import { FeedbackPeriod } from './FeedbackPeriod';

const FeedbackTopBar = ({ title = 'Feedback', hidePublishButton = true }) => (
  <div className="level header">
    <div className="level-left">
      <div className="hero-container">
        <h1 className="title">{title}</h1>
      </div>
    </div>

    <div className="level-right">
      <FeedbackPeriod />
      {!hidePublishButton && (
        <button className="button right-button">Publish Feedback</button>
      )}
    </div>
  </div>
);

export default FeedbackTopBar;
