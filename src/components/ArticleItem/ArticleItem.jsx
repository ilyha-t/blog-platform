import React from 'react';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import cl from './ArticleItem.module.css';
import avatar from './assets/avatar.png';

function handleErrorImage(e) {
  e.target.src = avatar;
}

function ArticleItem({ article }) {
  return (
    <div className={cl.article}>
      <div className={cl.article__content_left}>
        <div className={cl.article__title_block}>
          <h2 className={cl.article__title}>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h2>
          <div className={cl.article__title_favoriteCount}>
            <HeartOutlined />
            <span>{article.favoritesCount}</span>
          </div>
        </div>
        <ul className={cl.article__tags}>
          {article.tagList.map((tag) => (
            <li className={cl.article__tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <ReactMarkdown className={cl.article__content}>{article.body}</ReactMarkdown>
      </div>
      <div className={cl.article__author}>
        <div className={cl.article__author_info}>
          <p className={cl.article__author__name}>{article.author.username}</p>
          <span className={cl.article__author__date}>
            {format(parseISO(article.createdAt), 'MMMM d, y')}
          </span>
        </div>
        <img
          src={article.author.image}
          onError={handleErrorImage}
          alt="AvatarIcon"
          className={cl.article__author_img}
        />
      </div>
    </div>
  );
}

export default ArticleItem;
