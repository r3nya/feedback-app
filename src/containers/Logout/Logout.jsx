import React, { useEffect } from 'react';

const Logout = ({ onLogout }) => {
  useEffect(() => onLogout(), [onLogout]);

  return <h1 className="title is-1">Bye!</h1>;
};

export default Logout;
