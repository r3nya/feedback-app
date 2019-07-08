import React from 'react';

const Component = React.lazy(() => import('./Teams'));

const Teams = () => (
  <React.Suspense fallback={<div>Loading…</div>}>
    <Component />
  </React.Suspense>
);

export { Teams };
