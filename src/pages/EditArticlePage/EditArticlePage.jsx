import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { editArticleFormConfig } from '../../config/Form/editArticleFormConfig';
import {
  addTagToArticle,
  clearTags,
  getArticleBySlug,
  updateArticle,
} from '../../store/articleSlice';
import { getCurrentUser } from '../../store/userSlice';
import DoubleLoader from '../../components/Loaders/DoubleLoader/DoubleLoader';

import cl from './EditArticlePage.module.css';

function EditArticlePage() {
  const { slug } = useParams();
  const { user } = useSelector((state) => state.user);
  const { article, status } = useSelector((state) => state.article.currentArticle);
  const { myArticle } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentUser());
    getCurrentArticle();
    return () => dispatch(clearTags());
  }, []);

  async function getCurrentArticle() {
    const response = await dispatch(getArticleBySlug({ slug }));
    if (response.payload) {
      const tags = response.payload.article.tagList;
      dispatch(
        addTagToArticle(
          tags.map((tag, index) => {
            return { id: `${Date.now()}+${index}+${tag}`, name: tag };
          })
        )
      );
    }
  }

  async function updateArticleHandler(newArticle) {
    console.log(newArticle);
    try {
      const article = {
        article: {
          ...newArticle,
          tagList: myArticle.tagList.map((tag) => tag.name),
        },
      };

      console.log(slug, article);
      const response = await dispatch(updateArticle({ slug, article }));

      if (response.payload) {
        dispatch(clearTags());
        return navigate('/');
      } else {
        return;
      }
    } catch (e) {
      throw Error(`Error update atricle: ${e.message}`);
    }
  }

  return (
    <div className={cl.article__edit}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <TemplateForm
        className={cl.article__form}
        content={editArticleFormConfig(article)}
        handleAction={updateArticleHandler}
      />
      {status == 'loading' && <DoubleLoader textAction={'Загружаем...'} />}
    </div>
  );
}

export default EditArticlePage;
