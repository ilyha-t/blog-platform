import React from 'react';
import { Link } from 'react-router-dom';

import { nameApp } from '../../config/config';
import cl from './Navigation.module.css';

function Navigation({ navigationItems }) {
  return (
    <nav className={cl.navigation}>
      <Link to="/">
        <h1 className={cl.navigation__title}>{nameApp}</h1>
      </Link>
      <ul className={cl.navigation__links}>
        {navigationItems.map((navigation) => (
          <li
            className={cl.navigation__item}
            style={{ border: `1px solid ${navigation.color}` }}
            key={navigation.id}
          >
            <Link
              to={navigation.path}
              className={cl.navigation__link}
              style={{ color: navigation.color }}
            >
              {navigation.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
