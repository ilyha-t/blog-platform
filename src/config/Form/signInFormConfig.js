const signInForm = {
  title: 'Sign In',
  inputs: [
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
  ],
  contentBtn: 'Login',
  linkTo: '/sign-up',
  additionalData: (
    <p>
      Don’t have an account?
      <span> Sign Up</span>
    </p>
  ),
  state: [
    { name: 'email', initialValue: '' },
    { name: 'password', initialValue: '' },
  ],
};

export { signInForm };
