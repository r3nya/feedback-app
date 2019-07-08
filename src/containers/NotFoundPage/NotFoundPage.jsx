import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <article className="container" style={{ marginTop: '1rem' }}>
    <div className="box">
      <h6 className="subtitle is-6">404</h6>

      <h2 className="title is-2">
        Sorry! The page you are looking for cannot be found.{' '}
        <span role="img" aria-label="cry">
          😢
        </span>
      </h2>

      <Link className="button" to="/share-feedback">
        Back to Share feedback
      </Link>
    </div>
  </article>
);

export default NotFoundPage;
