var app = angular.module('app', ['ngResource', 'ui.router']);

app.config(route);

app.service('FavoriteService', ['$resource', '$q', FavoriteService]);

app.controller(WelcomeController);