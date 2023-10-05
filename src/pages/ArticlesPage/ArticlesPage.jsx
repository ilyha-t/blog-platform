import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import ArticleList from '../../components/ArticleList/ArticleList';
import { getArticle } from '../../store/articleSlice';

import cl from './ArticlesPage.module.css';

function ArticlesPage() {
  const { articles } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const [filteredArticle, setFilteredArticle] = useState([]);

  function paginationRatedArticle(page = 1) {
    const DEFAULT_SHOW = 5;
    const results = articles.list;
    console.log(results);
    let afterPagination = results.filter(
      (article) =>
        results.indexOf(article) < DEFAULT_SHOW * page &&
        results.indexOf(article) >= DEFAULT_SHOW * page - 5
    );
    setFilteredArticle(afterPagination);
  }

  useEffect(() => {
    dispatch(getArticle());
    paginationRatedArticle();
  }, []);

  return (
    <div className={cl.articles__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <div className={cl.articles__list}>
        <ArticleList className={cl.articles_items} articles={filteredArticle} />
        <Pagination
          className={cl.article__pagination}
          defaultCurrent={1}
          defaultPageSize={5}
          total={articles.list.length}
          showSizeChanger={false}
          onChange={(newPage) => paginationRatedArticle(newPage)}
        />
      </div>
    </div>
  );
}

export default ArticlesPage;
