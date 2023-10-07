import UserFragment from '../../components/Fragments/UserFragment/UserFragment';

export const unauthorizationConfig = [
  {
    id: 1,
    isFragment: false,
    title: 'Sign In',
    path: '/sign-in',
  },
  {
    id: 2,
    isFragment: false,
    title: 'Sign Up',
    path: '/sign-up',
    styles: {
      color: '#52C41A',
      border: '1px solid #52C41A',
      borderRadius: '5px',
    },
  },
];

export const authorizationConfig = [
  {
    id: 1,
    isFragment: false,
    title: 'Create article',
    path: '/new-article',
    styles: {
      color: '#52C41A',
      border: '1px solid #52C41A',
      borderRadius: '5px',
      padding: '5px',
    },
  },
  {
    id: 2,
    isFragment: true,
    fragment: <UserFragment />,
  },
  {
    id: 3,
    isFragment: false,
    title: 'Log Out',
    path: '/sign-up',
    styles: {
      borderRadius: '5px',
      border: '1px solid rgba(0, 0, 0, 0.75)',
    },
  },
];
