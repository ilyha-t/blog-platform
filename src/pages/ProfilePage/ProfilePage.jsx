import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import { editProfileForm } from '../../config/Form/editProfileFormConfig';
import { getCurrentUser } from '../../store/userSlice';

import cl from './ProfilePage.module.css';

function ProfilePage() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className={cl.profile__page}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <TemplateForm className={cl.edit__form} content={editProfileForm(user)} />
    </div>
  );
}

export default ProfilePage;
