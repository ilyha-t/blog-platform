import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import avatar from '../../../assets/avatar.png';

import cl from './UserFragment.module.css';

function UserFragment() {
  const { user } = useSelector((state) => state.user);

  return (
    <Link to="/profile" className={cl.user}>
      <span className={cl.user__name}>{user.user.username}</span>
      <img
        src={user ? user.user.image : avatar}
        alt="Avatar"
        className={cl.user__avatar}
        onError={(e) => (e.target.src = avatar)}
      />
    </Link>
  );
}

export default UserFragment;
