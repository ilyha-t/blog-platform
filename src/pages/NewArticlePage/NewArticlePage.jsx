import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { newArticleFormConfig } from '../../config/Form/newArticleFormConfig';
import { clearTags, createNewArticle } from '../../store/articleSlice';

import cl from './NewArticlePage.module.css';

function NewArticlePage() {
  const { user } = useSelector((state) => state.user);
  const { myArticle } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      return navigate('/sign-in');
    }
  }, []);

  async function createArticleHandle(newArticle) {
    try {
      const article = {
        article: {
          ...newArticle,
          tagList: myArticle.tagList.map((tag) => tag.name),
        },
      };

      console.log(article);
      const response = await dispatch(createNewArticle(article));

      if (response.payload) {
        dispatch(clearTags());
        return navigate('/');
      } else {
        return;
      }
    } catch (e) {
      throw Error(`Error create new atricle: ${e.message}`);
    }
  }

  return (
    <div className={cl.article__edit}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <TemplateForm
        className={cl.article__form}
        content={newArticleFormConfig}
        handleAction={createArticleHandle}
      />
    </div>
  );
}

export default NewArticlePage;
