import React from 'react';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';

import { errorFavorite } from '../Messages/NotificationConfig/NotificationConfig';
import { favoriteArticle, unfavoriteArticle } from '../../store/articleSlice';
import avatar from '../../assets/avatar.png';
import favorited from '../../assets/favorited.svg';
import unfavorited from '../../assets/unfavorited.svg';

import cl from './ArticleItem.module.css';

function handleErrorImage(e) {
  e.target.src = avatar;
}

function ArticleItem({ article }) {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  async function favoriteArticleHandler() {
    try {
      if (user) {
        if (article.favorited) {
          dispatch(unfavoriteArticle(article.slug));
        } else {
          dispatch(favoriteArticle(article.slug));
        }
      } else {
        errorFavorite(api, 'error');
        return;
      }
    } catch (error) {
      throw Error('Изменить реакцию не получилось:', error.message);
    }
  }

  return (
    <div className={cl.article}>
      {contextHolder}
      <div className={cl.article__content_left}>
        <div className={cl.article__title_block}>
          <h2 className={cl.article__title}>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h2>
          <div className={cl.article__title_favoriteCount}>
            <img
              className={cl.article__favorited}
              src={article.favorited ? favorited : unfavorited}
              onClick={() => favoriteArticleHandler()}
            />
            <span>{article.favoritesCount}</span>
          </div>
        </div>
        <ul className={cl.article__tags}>
          {article.tagList.map(
            (tag, index) =>
              tag &&
              tag.trim().length > 0 && (
                <li className={cl.article__tag} key={`${tag} + ${index}`}>
                  {tag}
                </li>
              )
          )}
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
