import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import EditArticlePage from '../pages/EditArticlePage/EditArticlePage';
import ViewArticlePage from '../pages/ViewArticlePage/ViewArticlePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ViewArticlePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/new-article" element={<EditArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
