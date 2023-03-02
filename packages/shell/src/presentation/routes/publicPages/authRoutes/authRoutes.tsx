import { lazy } from 'react';

import { urlRoutes } from '../../config/urlRoutes/urlRoutes';

export const AuthRoutes = [
    { path: urlRoutes.auth.login.url, element: lazy(()=> import('../../../pages/auth/login')) },
]