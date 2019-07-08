import React from 'react';

import styles from './FeedbackPeriod.module.scss';

const FeedbackPeriod = () => (
  <div className={styles.root}>
    <span className="text-small">Feedback period</span>
    <div className="select">
      <select>
        <option>October 2018</option>
        <option>November 2018</option>
      </select>
    </div>
  </div>
);

export default FeedbackPeriod;
