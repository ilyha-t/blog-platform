import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import { authorizationConfig } from '../../config/NavigationConfig';
import ArticleList from '../../components/ArticleList/ArticleList';
import { getArticle, setPage } from '../../store/articleSlice';
import DoubleLoader from '../../components/Loaders/DoubleLoader/DoubleLoader';
import UserService from '../../services/UserService/UserService';

import cl from './ArticlesPage.module.css';

function ArticlesPage() {
  const { articles, currentPage } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  function paginationRatedArticle(page) {
    console.log('called');
    const DEFAULT_SHOW = 5;
    const results = articles.list;
    console.log(results);
    let afterPagination = results.filter(
      (article) =>
        results.indexOf(article) < DEFAULT_SHOW * page &&
        results.indexOf(article) >= DEFAULT_SHOW * page - 5
    );
    console.log(afterPagination);
    return afterPagination;
  }

  useEffect(() => {
    dispatch(getArticle(currentPage));
    UserService.getCurrentUser();
  }, [currentPage]);

  return (
    <div className={cl.articles__page}>
      <Navigation navigationItems={authorizationConfig} />
      <div className={cl.articles__list}>
        <ArticleList className={cl.articles_items} articles={paginationRatedArticle(currentPage)} />
        <Pagination
          className={cl.article__pagination}
          defaultCurrent={currentPage}
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
