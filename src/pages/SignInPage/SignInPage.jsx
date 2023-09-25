import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { signInForm } from '../../config/Form/signInFormConfig';

import cl from './SignInPage.module.css';

function SignInPage() {
  return (
    <div className={cl.signIn__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm className={cl.login__form} content={signInForm} />
    </div>
  );
}

export default SignInPage;
