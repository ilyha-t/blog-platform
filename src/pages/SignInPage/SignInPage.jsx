import React from 'react';

import cl from './SignInPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import { unauthorizationConfig } from '../../config/NavigationConfig';
import SignInForm from '../../components/SignInForm/SignInForm';

function SignInPage() {
  return (
    <div className={cl.signIn__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <SignInForm className={cl.login__form} />
    </div>
  );
}

export default SignInPage;
