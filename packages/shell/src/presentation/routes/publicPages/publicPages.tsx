import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from './authRoutes/authRoutes';
import { HomeRoutes } from './shopRoutes/homeRoutes';

const NotFound = lazy(() => import('../../pages/404'));

export const publicRoutes = [...AuthRoutes, ...HomeRoutes];

export default function PublicPages() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {publicRoutes.map((routes) => (
        <Route
          key={routes.path}
          path={routes.path}
          element={<routes.element />}
        />
      ))}
    </Routes>
  );
}
