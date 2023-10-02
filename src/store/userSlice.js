import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import UserService from '../services/UserService/UserService';

export const createUser = createAsyncThunk(
  'user/createUser',
  async function (newUser, { rejectWithValue }) {
    try {
      console.log(newUser);
      const user = await UserService.createUser(newUser);
      localStorage.setItem('userData', JSON.stringify(user));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  extraReducers: {
    [createUser.pending]: () => {},
    [createUser.fulfilled]: () => {},
    [createUser.rejected]: () => {},
  },
});

export default userSlice.reducer;
