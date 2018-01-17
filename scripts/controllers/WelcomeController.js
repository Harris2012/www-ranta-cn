function WelcomeController($scope, FavoriteService, PopularService) {

    FavoriteService.favorites().then(function (result) {

        $scope.linkGroups = result;
    })

    PopularService.populars().then(function (result) {

        $scope.popularItems = result;
    })

}