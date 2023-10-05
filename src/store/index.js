import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import articleReducer from './articleSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
});
