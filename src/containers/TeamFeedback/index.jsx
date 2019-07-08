import React from 'react';

const Component = React.lazy(() => import('./TeamFeedback'));

const TeamFeedback = () => (
  <React.Suspense fallback={<div>Loading…</div>}>
    <Component />
  </React.Suspense>
);

export { TeamFeedback };
