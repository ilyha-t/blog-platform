import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { editArticleFormConfig } from '../../config/Form/editArticleFormConfig';

import cl from './EditArticlePage.module.css';

function EditArticlePage() {
  const { user } = useSelector((state) => state.user);

  function createArticleHandle(event) {
    console.log(event);
  }

  return (
    <div className={cl.article__edit}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <TemplateForm
        className={cl.article__form}
        content={editArticleFormConfig}
        handleAction={createArticleHandle}
      />
    </div>
  );
}

export default EditArticlePage;
