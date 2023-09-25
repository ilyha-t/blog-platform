import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import TemplateForm from '../../components/TemplateForm/TemplateForm';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import { signUpForm } from '../../config/Form/signUpFormConfig';

import cl from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className={cl.signUp__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm className={cl.create__form} content={signUpForm} />
    </div>
  );
}

export default SignUpPage;
