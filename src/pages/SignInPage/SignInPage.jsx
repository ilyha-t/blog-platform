import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { signInForm } from '../../config/Form/signInFormConfig';
import { loginUser } from '../../store/userSlice';
import DoubleLoader from '../../components/Loaders/DoubleLoader/DoubleLoader';

import cl from './SignInPage.module.css';

function SignInPage() {
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function logUser(userI) {
    const newUser = {
      user: {
        username: userI.username,
        email: userI.email,
        password: userI.password,
      },
    };
    dispatch(loginUser(newUser));
  }

  return (
    <div className={cl.signIn__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm className={cl.login__form} content={signInForm} handleAction={logUser} />
      {status === 'loading' && <DoubleLoader textAction={'Регистрируем..'} />}
    </div>
  );
}

export default SignInPage;
