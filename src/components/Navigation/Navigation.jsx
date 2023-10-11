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
          <li className={cl.navigation__item} key={navigation.id}>
            {navigation.isFragment ? (
              navigation.fragment
            ) : (
              <Link
                to={navigation.path}
                className={cl.navigation__link}
                style={{ ...navigation.styles }}
                onClick={navigation.handler ? navigation.handler : null}
              >
                {navigation.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
