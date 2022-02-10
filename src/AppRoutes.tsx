import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ROUTES from './routes';
import HomeView from './views/home';
import NewsView from './views/news';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomeView />} />
      <Route path={ROUTES.NEWS} element={<NewsView />} />
    </Routes>
  );
};

export default AppRoutes;
