import React from 'react';

import ArticleItem from '../ArticleItem/ArticleItem';

import cl from './ArticleList.module.css';

function ArticleList({ className, articles }) {
  return (
    <ul className={`${cl.articles} ${className}`}>
      {articles.map((article) => (
        <li key={article.slug}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
