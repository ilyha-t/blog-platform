const signUpForm = {
  title: 'Create new account',
  inputs: [
    {
      id: 'username',
      type: 'text',
      label: 'Username',
      validate: {
        name: 'validateUsername',
        rules: {
          required: true,
          validate: {
            matchPattern: (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email),
          },
        },
        errors: [
          { type: 'required', message: 'Username is required' },
          { type: 'matchPattern', message: 'Username is not valid' },
        ],
      },
      stateName: 'username',
    },
    {
      id: 'email',
      type: 'text',
      label: 'Email address',
      validate: {
        name: 'validateEmail',
        rules: {
          required: true,
          validate: {
            matchPattern: (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email),
          },
        },
        errors: [
          { type: 'required', message: 'Email is required' },
          { type: 'matchPattern', message: 'Email is not valid' },
        ],
      },
      stateName: 'email',
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      validate: {
        name: 'validatePassword',
        rules: { required: true },
        errors: [{ type: 'required', message: 'Password is required' }],
      },
      stateName: 'password',
    },
    {
      id: 'passwordRepeat',
      type: 'password',
      label: 'Repeat Password',
      validate: {
        name: 'validatePasswordRepeat',
        rules: { required: true },
        errors: [{ type: 'required', message: 'Password is required' }],
      },
      stateName: 'passwordRepeat',
    },
    {
      id: 'agreePersonal',
      type: 'checkbox',
      label: 'I agree to the processing of my personal information',
      validate: {
        name: 'validatePasswordRepeat',
        rules: { required: true },
        errors: [{ type: 'required', message: 'Password is required' }],
      },
      stateName: 'passwordRepeat',
    },
  ],
  contentBtn: 'Create',
  linkTo: '/sign-in',
  additionalData: (
    <p>
      Already have an account?
      <span> Sign In</span>
    </p>
  ),
  state: [
    { name: 'username', initialValue: '' },
    { name: 'email', initialValue: '' },
    { name: 'password', initialValue: '' },
    { name: 'passwordRepeat', initialValue: '' },
  ],
};

export { signUpForm };
