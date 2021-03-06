import React from 'react';
import styles from './NoFeedback.module.scss';

const NoFeedback = () => (
  <div className="container">
    <div className={styles.container}>
      <h1 className="title">
        No feedback to display
        <span role="img" aria-label="crystal-ball">
          🔮
        </span>
      </h1>
      <span>
        There is no feedback to display at this time – check back in a bit!
      </span>
    </div>
  </div>
);

export default NoFeedback;
