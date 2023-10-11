import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import UserService from '../services/UserService/UserService';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async function (newUser, { rejectWithValue }) {
    try {
      console.log(newUser);
      const user = await UserService.createUser(newUser);
      return user;
    } catch (error) {
      console.log('error');
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async function (userLogin, { rejectWithValue }) {
    try {
      console.log(userLogin);
      const user = await UserService.loginUser(userLogin);
      return user;
    } catch (error) {
      console.log('error');
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async function (_, { rejectWithValue }) {
    try {
      const user = await UserService.getCurrentUser();
      return user;
    } catch (error) {
      console.log('error');
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: '',
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [createUser.fulfilled]: (state) => {
      state.status = 'resolved';
    },
    [createUser.rejected]: setError,

    [loginUser.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'resolved';
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    [loginUser.rejected]: setError,
    [getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [getCurrentUser.rejected]: setError,
  },
});

export default userSlice.reducer;
