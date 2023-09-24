import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import cl from './SignInForm.module.css';
import errorIcon from './assets/errorIcon.svg';

function SignInForm({ className }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className={`${className} ${cl.form}`}>
      <h2 className={cl.login__title}>Sign In</h2>
      <form className={cl.login__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.login__form__item}>
          <label className={cl.login__form__label} htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className={`${cl.login__form__input} ${
              errors.validateEmail && cl.login__form__input_error
            }`}
            type="text"
            placeholder="Email address"
            {...register('validateEmail', {
              required: true,
              validate: {
                matchPattern: (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email),
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.validateEmail?.type === 'required' && (
            <div className={cl.error__message}>
              <img src={errorIcon} alt="ErrorIcon" className={cl.error__message__icon} />
              <p className={cl.error__description}>Email is required</p>
            </div>
          )}
          {errors.validateEmail?.type === 'matchPattern' && (
            <div className={cl.error__message}>
              <img src={errorIcon} alt="ErrorIcon" className={cl.error__message__icon} />
              <p className={cl.error__description}>Email is not valid</p>
            </div>
          )}
        </div>

        <div className={cl.login__form__item}>
          <label className={cl.login__form__label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className={`${cl.login__form__input} ${
              errors.validatePassword && cl.login__form__input_error
            }`}
            type="password"
            placeholder="Password"
            {...register('validatePassword', { required: true })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.validatePassword && (
            <div className={cl.error__message}>
              <img src={errorIcon} alt="ErrorIcon" className={cl.error__message__icon} />
              <p className={cl.error__description}>Password is required</p>
            </div>
          )}
        </div>

        <input className={`${cl.login__form__input} ${cl.input_btn}`} type="submit" value="Login" />
      </form>
      <Link to="/sign-up" className={cl.login__link}>
        <p>
          Don’t have an account?
          <span className={cl.login__link_signUp}> Sign Up</span>
        </p>
      </Link>
    </section>
  );
}

export default SignInForm;
