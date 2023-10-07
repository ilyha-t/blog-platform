import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { editArticleFormConfig } from '../../config/Form/editArticleFormConfig';

import cl from './EditArticlePage.module.css';

function EditArticlePage() {
  return (
    <div className={cl.article__edit}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm className={cl.article__form} content={editArticleFormConfig} />
    </div>
  );
}

export default EditArticlePage;
