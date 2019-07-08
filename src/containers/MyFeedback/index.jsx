import React from 'react';

const Component = React.lazy(() => import('./MyFeedback'));

const MyFeedback = () => (
  <React.Suspense fallback={<div>Loading…</div>}>
    <Component />
  </React.Suspense>
);

export { MyFeedback };
