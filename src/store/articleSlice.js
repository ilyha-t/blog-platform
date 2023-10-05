import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ArticleService from '../services/ArticleService/ArticleService';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const getArticle = createAsyncThunk(
  'article/getArticle',
  async function (_, { rejectWithValue }) {
    try {
      const articles = await ArticleService.getArticles();
      return articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    articles: {
      status: '',
      error: null,
      list: [],
      articlesCount: null,
    },
  },
  extraReducers: {
    [getArticle.pending]: (state) => {
      state.articles.status = 'loading';
      state.articles.error = null;
    },
    [getArticle.fulfilled]: (state, action) => {
      state.articles.list = [...state.articles.list, ...action.payload.articles];
      state.articles.articlesCount = action.payload.articlesCount;
      state.articles.status = 'loaded';
    },
    [getArticle.rejected]: setError,
  },
});

export default articleSlice.reducer;
