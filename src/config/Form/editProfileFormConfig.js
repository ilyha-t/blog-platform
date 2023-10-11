export function editProfileForm(value) {
  return {
    title: 'Edit Profile',
    inputs: [
      {
        id: 'username',
        type: 'text',
        label: 'Username',
        value: value && value.user.username,
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
      },
      {
        id: 'email',
        type: 'text',
        label: 'Email address',
        value: value && value.user.email,
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
      },
      {
        id: 'bio',
        type: 'text',
        label: 'Biography',
        value: 'https://static.productionready.io/images/smiley-cyrus.jp',
        validate: {
          name: 'validateBio',
          rules: { required: true },
          errors: [{ type: 'required', message: 'Bio is required' }],
        },
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
      },
    ],
    contentBtn: 'Save',
  };
}
