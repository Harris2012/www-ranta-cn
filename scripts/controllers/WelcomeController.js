function WelcomeController($scope, FavoriteService) {

    FavoriteService.favorites().then(function (result) {

        $scope.linkGroups = result;
    })

}