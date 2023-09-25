import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { editProfileForm } from '../../config/Form/editProfileFormConfig';

import cl from './ProfilePage.module.css';

function ProfilePage() {
  return (
    <div className={cl.profile__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm className={cl.edit__form} content={editProfileForm} />
    </div>
  );
}

export default ProfilePage;
