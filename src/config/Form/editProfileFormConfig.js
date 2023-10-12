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
          name: 'username',
          rules: {
            required: true,
          },
          errors: [{ type: 'required', message: 'Username is required' }],
        },
      },
      {
        id: 'email',
        type: 'text',
        label: 'Email address',
        value: value && value.user.email,
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
        id: 'bio',
        type: 'text',
        label: 'Biography',
        value: value && value.user.bio,
        validate: {
          name: 'bio',
          rules: { required: true },
          errors: [{ type: 'required', message: 'Bio is required' }],
        },
      },
      {
        id: 'avatar',
        type: 'text',
        label: 'Avatar image (url)',
        value: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
        validate: {
          name: 'image',
          rules: { required: true },
          errors: [{ type: 'required', message: 'Avatar is required' }],
        },
      },
      {
        id: 'password',
        type: 'password',
        label: 'New password',
        validate: {
          name: 'password',
          rules: { required: true },
          errors: [{ type: 'required', message: 'Password is required' }],
        },
      },
    ],
    contentBtn: 'Save',
  };
}
