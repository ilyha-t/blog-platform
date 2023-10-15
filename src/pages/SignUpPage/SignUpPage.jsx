import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { signUpForm } from '../../config/Form/signUpFormConfig';
import { createUser } from '../../store/userSlice';
import DoubleLoader from '../../components/Loaders/DoubleLoader/DoubleLoader';
import {
  errorCreate,
  errorPassword,
} from '../../components/Messages/NotificationConfig/NotificationConfig';

import cl from './SignUpPage.module.css';

function SignUpPage() {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.user);
  const navigate = useNavigate();

  async function createUserHandler(userI) {
    try {
      console.log(userI);
      if (userI.password !== userI.passwordRepeat || !userI.agreePersonal) {
        errorPassword(api, 'error');
        return;
      }
      const newUser = {
        user: {
          username: userI.username,
          email: userI.email,
          password: userI.password,
        },
      };
      const user = await dispatch(createUser(newUser));

      if (user.payload) {
        navigate('/sign-in');
      } else {
        errorCreate(api, 'error');
      }
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div className={`${cl.signUp__page} ${cl.signUp__page_loading}`}>
      {contextHolder}
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm
        className={cl.create__form}
        content={signUpForm}
        handleAction={createUserHandler}
      />
      {status === 'loading' && (
        <DoubleLoader parentClasses={cl.loader} textAction={'Регистрируем..'} />
      )}
    </div>
  );
}

export default SignUpPage;
