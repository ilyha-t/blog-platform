export const errorPassword = (api, type) => {
  api[type]({
    message: 'Ошибка в пароле',
    description: 'Пароли не совпадают. Пожалуйста, повторите ввод.',
  });
};

export const errorLogin = (api, type) => {
  api[type]({
    message: 'Ошибка входа',
    description: 'Ошибка входа. Пожалуйста, проверьте введённые данные.',
  });
};

export const errorCreate = (api, type) => {
  api[type]({
    message: 'Ошибка создания',
    description: 'Пользователь с таким именем или почтой уже существует.',
  });
};

export const errorFavorite = (api, type) => {
  api[type]({
    message: 'Реакция не поставлена',
    description: 'Ставить реакции могут только авторизированные пользователи.',
  });
};
