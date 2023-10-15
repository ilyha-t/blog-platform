import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import NewArticlePage from '../pages/NewArticlePage/NewArticlePage';
import ViewArticlePage from '../pages/ViewArticlePage/ViewArticlePage';
import EditArticlePage from '../pages/EditArticlePage/EditArticlePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ViewArticlePage />} />
        <Route path="/articles/:slug/edit" element={<EditArticlePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/new-article" element={<NewArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
