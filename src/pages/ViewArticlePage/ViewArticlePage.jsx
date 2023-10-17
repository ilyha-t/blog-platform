import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import { clearCurrentArticle } from '../../store/articleSlice';
import { getCurrentUser } from '../../store/userSlice';
import ArticleView from '../../components/ArticleView/ArticleView';

import cl from './ViewArticlePage.module.css';

function ViewArticlePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCurrentUser());
    return () => {
      dispatch(clearCurrentArticle());
    };
  }, []);

  return (
    <div className={cl.article__preview}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <ArticleView />
    </div>
  );
}

export default ViewArticlePage;
