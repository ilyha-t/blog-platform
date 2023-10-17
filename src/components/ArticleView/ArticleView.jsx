import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { notification } from 'antd';

import Button from '../Fragments/Button/Button';
import DeleteArticleMessage from '../Messages/DeleteArticleMessage/DeleteArticleMessage';
import DoubleLoader from '../Loaders/DoubleLoader/DoubleLoader';
import {
  deleteArticle,
  favoriteArticle,
  getArticleBySlug,
  unfavoriteArticle,
} from '../../store/articleSlice';
import avatar from '../../assets/avatar.png';
import favorited from '../../assets/favorited.svg';
import unfavorited from '../../assets/unfavorited.svg';
import { errorFavorite } from '../Messages/NotificationConfig/NotificationConfig';

import cl from './ArticleView.module.css';

function handleErrorImage(e) {
  e.target.src = avatar;
}

const deleteBtn = {
  color: '#f5222d',
  borderColor: '#f5222d',
  padding: '6px',
};

const editBtn = {
  color: '#52C41A',
  borderColor: '#52C41A',
  padding: '6px',
};

function ArticleView() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [deleteMessage, setDeleteMessage] = useState(false);
  const { article, status } = useSelector((state) => state.article.currentArticle);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    dispatch(getArticleBySlug({ slug }));
  }, []);

  async function deleteArticleHandler() {
    try {
      const response = await dispatch(deleteArticle(article.slug));

      if (response.payload) {
        return navigate('/');
      } else {
        console.log('error delete article');
      }
    } catch (error) {
      throw Error('Error delete article: ', error.message);
    }
  }

  function favoriteArticleHandler() {
    try {
      if (user) {
        if (article.favorited) {
          dispatch(unfavoriteArticle(slug));
        } else {
          dispatch(favoriteArticle(slug));
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
    <div className={cl.articles__preview_container}>
      {contextHolder}
      <section className={cl.articles__preview_window}>
        {article && status == 'loaded' && (
          <div className={cl.article__container}>
            <div className={cl.article__maininfo}>
              <div className={cl.article__maininfo_container}>
                <div className={cl.article__title_block}>
                  <h2 className={cl.article__title}>{article.title}</h2>
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
                      tag.trim().length > 0 && (
                        <li className={cl.article__tag} key={`${tag}+${index}`}>
                          {tag}
                        </li>
                      )
                  )}
                </ul>
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
            <div className={cl.article__subtitle}>
              <p className={cl.article__description}>{article.description}</p>
              {user && user.user.username === article.author.username && (
                <div className={cl.article__btns}>
                  <div className={cl.article__deleteBtn}>
                    <Button
                      text={'Delete'}
                      styles={deleteBtn}
                      onClick={() => setDeleteMessage(!deleteMessage)}
                    />
                    {deleteMessage && (
                      <DeleteArticleMessage
                        submitDelete={deleteArticleHandler}
                        discardDelete={() => setDeleteMessage(false)}
                      />
                    )}
                  </div>
                  <Button text={'Edit'} styles={editBtn} onClick={() => navigate('edit')} />
                </div>
              )}
            </div>
            <ReactMarkdown className={cl.article__body}>{article.body}</ReactMarkdown>
          </div>
        )}
        {status == 'loading' && <DoubleLoader textAction={'Загружаем...'} />}
      </section>
    </div>
  );
}

export default ArticleView;
