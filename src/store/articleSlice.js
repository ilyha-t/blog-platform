import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ArticleService from '../services/ArticleService/ArticleService';
import { paginationNumber } from '../config/config';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const getArticle = createAsyncThunk(
  'article/getArticle',
  async function (page, { rejectWithValue }) {
    try {
      const newLimit = page * paginationNumber;
      const articles = await ArticleService.getArticles(newLimit);
      return articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getArticleBySlug = createAsyncThunk(
  'article/getArticleBySlug',
  async function ({ slug }, { rejectWithValue }) {
    try {
      const article = await ArticleService.getArticleBySlug(slug);
      return article;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const createNewArticle = createAsyncThunk(
  'article/createNewArticle',
  async function (newArticle, { rejectWithValue }) {
    try {
      const article = await ArticleService.createArticle(newArticle);
      return article;
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
    currentArticle: {
      status: '',
      error: null,
      article: {},
    },
    myArticle: {
      tagList: [],
    },
    currentPage: 1,
  },
  reducers: {
    setPage(state, action) {
      console.log(action.payload);
      state.currentPage = action.payload.newPage;
    },
    addTagToArticle(state, action) {
      state.myArticle.tagList = [...state.myArticle.tagList, action.payload];
    },
    deleteTagArticle(state, action) {
      state.myArticle.tagList = action.payload;
    },
    changeTagArticle(state, action) {
      state.myArticle.tagList = action.payload;
    },
    clearTags(state) {
      state.myArticle.tagList = [];
    },
  },
  extraReducers: {
    [getArticle.pending]: (state) => {
      state.articles.status = 'loading';
      state.articles.error = null;
    },
    [getArticle.fulfilled]: (state, action) => {
      state.articles.list = action.payload.articles;
      state.articles.articlesCount = action.payload.articlesCount;
      state.articles.status = 'loaded';
    },
    [getArticle.rejected]: setError,

    [getArticleBySlug.pending]: (state) => {
      state.currentArticle.status = 'loading';
      state.currentArticle.error = null;
    },
    [getArticleBySlug.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.currentArticle.article = { ...action.payload.article };
      state.currentArticle.status = 'loaded';
    },
    [createNewArticle.rejected]: setError,
    [getArticleBySlug.pending]: (state) => {
      state.currentArticle.status = 'loading';
      state.currentArticle.error = null;
    },
    [createNewArticle.fulfilled]: (state) => {
      state.currentArticle.status = 'loaded';
    },
    [createNewArticle.rejected]: setError,
  },
});

export const { setPage, addTagToArticle, deleteTagArticle, changeTagArticle, clearTags } =
  articleSlice.actions;

export default articleSlice.reducer;
