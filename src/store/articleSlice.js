import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ArticleService from '../services/ArticleService/ArticleService';
import { paginationNumber } from '../config/config';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const updateArticles = (response, list) => {
  if (response) {
    const findIndex = list.findIndex((article) => article.slug === response.slug);
    if (findIndex !== -1) {
      return {
        articles: [...list.slice(0, findIndex), response, ...list.slice(findIndex + 1)],
        currentArticle: response,
      };
    } else {
      return {
        articles: list,
        currentArticle: response,
      };
    }
  }
};

export const getArticle = createAsyncThunk(
  'article/getArticle',
  async function (page, { rejectWithValue }) {
    try {
      const offset = (page - 1) * paginationNumber;
      const articles = await ArticleService.getArticles(offset);
      return articles;
    } catch (error) {
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
      return rejectWithValue(error.message);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  'article/deleteArticle',
  async function (slug, { rejectWithValue }) {
    try {
      const response = await ArticleService.deleteArticle(slug);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateArticle = createAsyncThunk(
  'article/updateArticle',
  async function ({ slug, article }, { rejectWithValue }) {
    try {
      const response = await ArticleService.updateArticle(slug, article);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const favoriteArticle = createAsyncThunk(
  'article/favoriteArticle',
  async function (slug, { rejectWithValue }) {
    try {
      const response = await ArticleService.favoriteArticle(slug);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const unfavoriteArticle = createAsyncThunk(
  'article/unfavoriteArticle',
  async function (slug, { rejectWithValue }) {
    try {
      const response = await ArticleService.unFavoriteArticle(slug);
      return response;
    } catch (error) {
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
    currentPage: sessionStorage.getItem('currentPage') | 1,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload.newPage;
      sessionStorage.setItem('currentPage', action.payload.newPage);
    },
    addTagToArticle(state, action) {
      state.myArticle.tagList = [...state.myArticle.tagList, ...action.payload];
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
    clearCurrentArticle(state) {
      state.currentArticle = {
        status: '',
        error: null,
        article: {},
      };
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
      state.currentArticle.article = { ...action.payload.article };
      state.currentArticle.status = 'loaded';
    },
    [getArticleBySlug.rejected]: setError,
    [createNewArticle.pending]: (state) => {
      state.currentArticle.status = 'loading';
      state.currentArticle.error = null;
    },
    [createNewArticle.fulfilled]: (state) => {
      state.currentArticle.status = '';
    },
    [createNewArticle.rejected]: setError,
    [deleteArticle.pending]: (state) => {
      state.currentArticle.status = 'loading';
      state.currentArticle.error = null;
    },
    [deleteArticle.fulfilled]: (state) => {
      state.currentArticle.status = 'loaded';
    },
    [deleteArticle.rejected]: setError,
    [updateArticle.pending]: (state) => {
      state.currentArticle.status = 'loading';
      state.currentArticle.error = null;
    },
    [updateArticle.fulfilled]: (state) => {
      state.currentArticle.status = 'loaded';
    },
    [updateArticle.rejected]: setError,
    [favoriteArticle.fulfilled]: (state, action) => {
      const { articles, currentArticle } = updateArticles(
        action.payload.article,
        state.articles.list
      );
      state.articles.list = articles;
      state.currentArticle = { status: 'loaded', error: null, article: currentArticle };
    },
    [favoriteArticle.rejected]: setError,
    [unfavoriteArticle.fulfilled]: (state, action) => {
      const { articles, currentArticle } = updateArticles(
        action.payload.article,
        state.articles.list
      );
      state.articles.list = articles;
      state.currentArticle = { status: 'loaded', error: null, article: currentArticle };
    },
    [unfavoriteArticle.rejected]: setError,
  },
});

export const {
  setPage,
  addTagToArticle,
  deleteTagArticle,
  changeTagArticle,
  clearTags,
  clearCurrentArticle,
} = articleSlice.actions;

export default articleSlice.reducer;
