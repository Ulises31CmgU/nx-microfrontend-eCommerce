import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoutes from './publicRoutes';
import PrivatedRoutes from './privatedRoutes';

import PublicPages from './publicPages/publicPages';
import PrivatedPages from './privatedPages/privatedPages';

import { CircularProgress } from '@mui/material';

export default function Index() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <div>
        <Routes>
          <Route element={<PublicRoutes isLoggedIn={false} />}>
            <Route path={'/*'} element={<PublicPages />} />
          </Route>

          <Route element={<PrivatedRoutes isLoggedIn={false} />}>
            <Route path={'/*'} element={<PrivatedPages rol="Admin" />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}
