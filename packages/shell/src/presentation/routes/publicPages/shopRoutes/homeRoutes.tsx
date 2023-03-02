import { lazy } from 'react';

import { urlRoutes } from '../../config/urlRoutes/urlRoutes';

export const HomeRoutes = [
  {
    nameUrl: 'Inicio',
    path: urlRoutes.home.url,
    element: lazy(() => import('../../../pages/home')),
  },
  {
    nameUrl: 'Tienda',
    path: urlRoutes.shop.url,
    element: lazy(() => import('../../../pages/shop')),
  },
  {
    nameUrl: 'Salida',
    path: urlRoutes.checkout.url,
    element: lazy(() => import('../../../pages/checkout')),
  },
];
