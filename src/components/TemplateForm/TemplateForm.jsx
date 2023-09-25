import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import errorIcon from './assets/errorIcon.svg';
import cl from './TemplateForm.module.css';

function TemplateForm({ className, content }) {
  const initialState = {};

  content.state.forEach((field) => {
    initialState[field.name] = field.initialValue;
  });

  const [formState, setFormState] = useState(initialState);
  console.log(formState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className={`${className} ${cl.form}`}>
      <h2 className={cl.login__title}>{content.title}</h2>
      <form className={cl.login__form} onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input) => (
          <div className={cl.login__form__item} key={input.id}>
            <label className={cl.login__form__label} htmlFor={input.id}>
              {input.label}
            </label>
            <input
              className={`${cl.login__form__input} ${
                errors[input.validate.name] && cl.login__form__input_error
              }`}
              id={input.id}
              type={input.type}
              placeholder={input.label}
              value={formState[input.stateName]}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  [input.validate.name]: e.target.value,
                })
              }
              {...register(input.validate.name, { ...input.validate.rules })}
            />
            {input.validate.errors.map(
              (error) =>
                errors[input.validate.name]?.type === error.type && (
                  <div className={cl.error__message} key={error.type}>
                    <img src={errorIcon} alt="ErrorIcon" className={cl.error__message__icon} />
                    <p className={cl.error__description}>{error.message}</p>
                  </div>
                )
            )}
          </div>
        ))}

        <input
          className={`${cl.login__form__input} ${cl.input_btn}`}
          type="submit"
          value={content.contentBtn}
        />
      </form>
      {content.linkTo && (
        <Link to={content.linkTo} className={cl.login__link}>
          {content.additionalData}
        </Link>
      )}
    </section>
  );
}

export default TemplateForm;
