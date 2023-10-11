import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  async function logUser(userI) {
    try {
      const newUser = {
        user: {
          username: userI.username,
          email: userI.email,
          password: userI.password,
        },
      };
      const user = await dispatch(loginUser(newUser));

      if (user.payload) {
        navigate('/');
      } else {
        console.log('error login');
      }
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div className={cl.signIn__page}>
      <Navigation navigationItems={unauthorizationConfig} />
      <TemplateForm className={cl.login__form} content={signInForm} handleAction={logUser} />
      {status === 'loading' && <DoubleLoader textAction={'Входим..'} />}
    </div>
  );
}

export default SignInPage;
