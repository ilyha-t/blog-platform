import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import ArticleList from '../../components/ArticleList/ArticleList';
import { getArticle, setPage } from '../../store/articleSlice';
import DoubleLoader from '../../components/Loaders/DoubleLoader/DoubleLoader';
import { getCurrentUser } from '../../store/userSlice';

import cl from './ArticlesPage.module.css';

function ArticlesPage() {
  const { articles, currentPage } = useSelector((state) => state.article);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(currentPage));
    dispatch(getCurrentUser());
  }, [currentPage]);

  return (
    <div className={cl.articles__page}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <div className={cl.articles__list}>
        <ArticleList className={cl.articles_items} articles={articles.list} />
        <Pagination
          className={cl.article__pagination}
          current={currentPage}
          defaultPageSize={5}
          total={articles.articlesCount}
          showSizeChanger={false}
          onChange={(newPage) => dispatch(setPage({ newPage }))}
        />
        {articles.status == 'loading' && <DoubleLoader textAction={'Загружаем...'} />}
      </div>
    </div>
  );
}

export default ArticlesPage;
