const signUpForm = {
  title: 'Create new account',
  inputs: [
    {
      id: 'username',
      type: 'text',
      label: 'Username',
      validate: {
        name: 'username',
        rules: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
        errors: [
          { type: 'required', message: 'Username is required' },
          { type: 'minLength', message: 'Min length 3 symbols' },
          { type: 'maxLength', message: 'Max length 20 symbols' },
        ],
      },
    },
    {
      id: 'email',
      type: 'text',
      label: 'Email address',
      validate: {
        name: 'email',
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
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      validate: {
        name: 'password',
        rules: { required: true, minLength: 6, maxLength: 40 },
        errors: [
          { type: 'required', message: 'Password is required' },
          { type: 'minLength', message: 'Min length 6 symbols' },
          { type: 'maxLength', message: 'Max length 40 symbols' },
        ],
      },
    },
    {
      id: 'passwordRepeat',
      type: 'password',
      label: 'Repeat Password',
      validate: {
        name: 'passwordRepeat',
        rules: { required: true, minLength: 6, maxLength: 40 },
        errors: [
          { type: 'required', message: 'Password is required' },
          { type: 'minLength', message: 'Min length 6 symbols' },
          { type: 'maxLength', message: 'Max length 40 symbols' },
        ],
      },
    },
    {
      id: 'agreePersonal',
      type: 'checkbox',
      label: 'I agree to the processing of my personal information',
      validate: {
        name: 'agreePersonal',
        rules: { required: true },
        errors: [
          {
            type: 'required',
            message: 'Accept processing personal information',
            style: { top: '-25px' },
          },
        ],
      },
      customClass: {
        marginTop: '10px',
        flexDirection: 'row',
        alignItems: 'start',
        gap: '8px',
        cursor: 'pointer',
        borderTop: '2px solid #eaeae0',
        paddingTop: '5px',
      },
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
};

export { signUpForm };
