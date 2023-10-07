import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeartOutlined } from '@ant-design/icons';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';

import Navigation from '../../components/Navigation/Navigation';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { getArticleBySlug } from '../../store/articleSlice';
import DoubleLoader from '../../components/Loaders/DoubleLoader/DoubleLoader';
import Button from '../../components/Fragments/Button/Button';

import cl from './ViewArticlePage.module.css';
import avatar from './assets/avatar.png';

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

function ViewArticlePage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { article, status } = useSelector((state) => state.article.currentArticle);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArticleBySlug({ slug }));
    console.log(article, status);
  }, []);

  return (
    <div className={cl.article__preview}>
      <Navigation navigationItems={unauthorizationConfig} />
      <div className={cl.articles__preview_container}>
        <section className={cl.articles__preview_window}>
          {status == 'loaded' && (
            <div className={cl.article__container}>
              <div className={cl.article__maininfo}>
                <div>
                  <div className={cl.article__title_block}>
                    <h2 className={cl.article__title}>{article.title}</h2>
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
                <div className={cl.article__btns}>
                  <Button text={'Delete'} styles={deleteBtn} />
                  <Button text={'Edit'} styles={editBtn} onClick={() => navigate('/new-article')} />
                </div>
              </div>
              <ReactMarkdown className={cl.article__body}>{article.body}</ReactMarkdown>
            </div>
          )}
          {status == 'loading' && <DoubleLoader textAction={'Загружаем...'} />}
        </section>
      </div>
    </div>
  );
}

export default ViewArticlePage;
