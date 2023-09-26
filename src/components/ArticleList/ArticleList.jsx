import React from 'react';

import ArticleItem from '../ArticleItem/ArticleItem';

import cl from './ArticleList.module.css';

function ArticleList({ className }) {
  return (
    <ul className={`${cl.articles} ${className}`}>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
      <li>
        <ArticleItem />
      </li>
    </ul>
  );
}

export default ArticleList;
