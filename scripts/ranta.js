function WelcomeController($scope, FavoriteService) {

    FavoriteService.favorites().then(function (result) {

        $scope.linkGroups = result;
    })

}
function FavoriteService($resource, $q) {

    var resource = $resource('data/favorites.json', {}, {
        getData: { method: 'GET', url: 'data/favorites.json', isArray: true }
    });

    return {
        favorites: function () {
            var d = $q.defer();
            resource.getData({}, function (result) {
                d.resolve(result);
            }, function (result) {
                d.reject(result);
            });
            return d.promise;
        }
    }

}
var route = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/welcome').when('/', '/welcome');

    $stateProvider.state('app', {
        url: '/'
    });

    $stateProvider.state('app.welcome', {
        url: 'welcome',
        templateUrl: 'scripts/views/view_welcome.html?v=' + window.version,
        controller: WelcomeController
    });
}
var app = angular.module('app', ['ngResource', 'ui.router']);

app.config(route);

app.service('FavoriteService', ['$resource', '$q', FavoriteService]);

app.controller(WelcomeController);