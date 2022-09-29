export const environment = {
  production: true,
  // apiUrl: 'http://app.heroku.com',
  // tokenAllowedDomains: [/app.heroku.com/],
  // tokenDisallowedRoutes: [/\/oauth\/token/],

  apiUrl: 'http://localhost:8080',
  tokenAllowedDomains: [/localhost:8080/],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};
