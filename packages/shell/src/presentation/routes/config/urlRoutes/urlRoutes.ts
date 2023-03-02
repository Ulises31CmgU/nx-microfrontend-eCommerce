export const urlRoutes = {
  auth: {
    url: '/autenticacion/*',

    login: {
      url: '/login',
      urlTo: '/autenticacion/login',
    },
  },

  home: {
    url: '/',
  },
  shop: {
    url: '/shop/*',
  },
  checkout: {
    url: '/checkout',
  },
};
