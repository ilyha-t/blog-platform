import React from 'react';
import { Pagination } from 'antd';

import Navigation from '../../components/Navigation/Navigation';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import ArticleList from '../../components/ArticleList/ArticleList';

import cl from './ArticlesPage.module.css';

function ArticlesPage() {
  return (
    <div className={cl.articles__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <div className={cl.articles__list}>
        <ArticleList className={cl.articles_items} />
        <Pagination
          className={cl.article__pagination}
          defaultCurrent={1}
          defaultPageSize={5}
          total={30}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default ArticlesPage;
