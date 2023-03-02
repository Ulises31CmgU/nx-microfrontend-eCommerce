import React from 'react'
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { HomeRoutes } from './homeRoutes/homeRoutes';

const NotFound = lazy(() => import("../../pages/404"));

export const privatedRoutes = [
  ...HomeRoutes,
]

interface IProps {
  rol: string
}

export default function PrivatedPages({ rol }: IProps) {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {privatedRoutes.map((routes: any) => {
        if (routes.rols.find((rols: any) => rols === rol || rols === "*")) {
          return (
            <Route
              key={routes.path}
              path={routes.path}
              element={<routes.element />}
            />
          )
        }
        return null
      })}
    </Routes>
  );
} 