import React from 'react';

const Component = React.lazy(() => import('./ShareFeedback'));

const ShareFeedback = () => (
  <React.Suspense fallback={<div>Loading…</div>}>
    <Component />
  </React.Suspense>
);

export { ShareFeedback };
