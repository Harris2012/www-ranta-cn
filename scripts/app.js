var app = angular.module('app', ['ngResource', 'ui.router']);

app.config(route);

app.service('FavoriteService', ['$resource', '$q', FavoriteService]);
app.service('PopularService', ['$resource', '$q', PopularService]);

app.controller(WelcomeController);