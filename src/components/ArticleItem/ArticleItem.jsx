import React from 'react';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';

import cl from './ArticleItem.module.css';
import avatar from './assets/avatar.png';

function handleErrorImage(e) {
  e.target.src = avatar;
}

function ArticleItem({ article }) {
  return (
    <div className={cl.article}>
      <div className={cl.article__content_left}>
        <h2 className={cl.article__title}>{article.title}</h2>
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
