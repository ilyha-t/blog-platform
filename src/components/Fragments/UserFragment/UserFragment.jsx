import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../ArticleItem/assets/avatar.png';

import cl from './UserFragment.module.css';

function UserFragment() {
  return (
    <Link to="/profile" className={cl.user}>
      <span className={cl.user__name}>John Doe</span>
      <img src={avatar} alt="Avatar" className={cl.user__avatar} />
    </Link>
  );
}

export default UserFragment;
