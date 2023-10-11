import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { authorizationConfig, unauthorizationConfig } from '../../config/NavigationConfig';
import { editProfileForm } from '../../config/Form/editProfileFormConfig';
import { getCurrentUser, updateUserInfo } from '../../store/userSlice';

import cl from './ProfilePage.module.css';

function ProfilePage() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  async function saveEditProfile(userI) {
    try {
      const newUser = {
        user: {
          ...userI,
        },
      };
      console.log(newUser);

      const user = await dispatch(updateUserInfo(newUser));

      if (user.payload) {
        navigate('/');
      } else {
        console.log('error update');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={cl.profile__page}>
      <Navigation navigationItems={user ? authorizationConfig : unauthorizationConfig} />
      <TemplateForm
        className={cl.edit__form}
        content={editProfileForm(user)}
        handleAction={saveEditProfile}
      />
    </div>
  );
}

export default ProfilePage;
