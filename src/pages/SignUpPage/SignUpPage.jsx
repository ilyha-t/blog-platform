import React from 'react';
import { useDispatch } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { signUpForm } from '../../config/Form/signUpFormConfig';
import { createUser } from '../../store/userSlice';

import cl from './SignUpPage.module.css';

function SignUpPage() {
  const dispatch = useDispatch();

  function createUserHandler(userI) {
    const newUser = {
      user: {
        username: userI.username,
        email: userI.email,
        password: userI.password,
      },
    };
    dispatch(createUser(newUser));
  }

  return (
    <div className={cl.signUp__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm
        className={cl.create__form}
        content={signUpForm}
        handleAction={createUserHandler}
      />
    </div>
  );
}

export default SignUpPage;
