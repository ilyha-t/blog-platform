import React from 'react';

import cl from './ArticleItem.module.css';
import avatar from './assets/avatar.png';

function ArticleItem() {
  return (
    <div className={cl.article}>
      <div className={cl.article__content_left}>
        <h2 className={cl.article__title}>Article title</h2>
        <ul className={cl.article__tags}>
          <li className={cl.article__tag}>Tag1</li>
          <li className={cl.article__tag}>Tag2</li>
        </ul>
        <p className={cl.article__content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
        </p>
      </div>
      <div className={cl.article__author}>
        <div className={cl.article__author_info}>
          <p className={cl.article__author__name}>John Doe</p>
          <span className={cl.article__author__date}>Marth 5, 2020</span>
        </div>
        <img src={avatar} alt="AvatarIcon" className={cl.article__author_img} />
      </div>
    </div>
  );
}

export default ArticleItem;
