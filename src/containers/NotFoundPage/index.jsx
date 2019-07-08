import React from 'react';

const Component = React.lazy(() => import('./NotFoundPage'));

const NotFoundPage = () => (
  <React.Suspense fallback={<div>Loading…</div>}>
    <Component />
  </React.Suspense>
);

export { NotFoundPage };
