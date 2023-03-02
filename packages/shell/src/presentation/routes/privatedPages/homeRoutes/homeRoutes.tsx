import { lazy } from 'react';

import { urlRoutes } from '../../config/urlRoutes/urlRoutes';

export const HomeRoutes = [
    { 
        nameUrl: "Inicio",
        path: urlRoutes.home.url, 
        element: lazy(() => import('../../../pages/home')),
        rols: [
            "Admin",
            "User",
            "*",
        ]
    },

]