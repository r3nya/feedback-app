import React from 'react';

const Component = React.lazy(() => import('./FeedbackWizard'));

const FeedbackWizard = () => (
  <React.Suspense fallback={<div>Loading…</div>}>
    <Component />
  </React.Suspense>
);

export { FeedbackWizard };
