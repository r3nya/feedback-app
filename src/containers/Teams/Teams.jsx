import React from 'react';
import { inject, observer } from 'mobx-react';

const Teams = ({ team }) => (
  <article className="columns is-multiline" style={{ marginTop: '1rem' }}>
    {team.users.map((user, idx) => (
      <div className="column is-one-third" key={idx}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={user.avatar} alt={user.name} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{user.name}</p>
                <p className="subtitle is-6">
                  @{user.name.replace(/\s/g, '').toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </article>
);
export default inject('team')(observer(Teams));
