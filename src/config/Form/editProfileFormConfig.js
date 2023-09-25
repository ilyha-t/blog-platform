const editProfileForm = {
  title: 'Edit Profile',
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
      label: 'New password',
      validate: {
        name: 'validatePassword',
        rules: { required: true },
        errors: [{ type: 'required', message: 'Password is required' }],
      },
      stateName: 'password',
    },
    {
      id: 'avatar',
      type: 'text',
      label: 'Avatar image (url)',
      validate: {
        name: 'validateAvatar',
        rules: { required: true },
        errors: [{ type: 'required', message: 'Password is required' }],
      },
      stateName: 'avatar',
    },
  ],
  contentBtn: 'Save',
  state: [
    { name: 'username', initialValue: '' },
    { name: 'email', initialValue: '' },
    { name: 'password', initialValue: '' },
    { name: 'avatar', initialValue: '' },
  ],
};

export { editProfileForm };
