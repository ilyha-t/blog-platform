export const errorPassword = (api, type) => {
  api[type]({
    message: 'Password error',
    description: 'The password must match. Please check your input.',
  });
};

export const errorLogin = (api, type) => {
  api[type]({
    message: 'Login error',
    description: 'Login error. Please check your authorization data.',
  });
};

export const errorCreate = (api, type) => {
  api[type]({
    message: 'Create error',
    description: 'User with this username already exist.',
  });
};
