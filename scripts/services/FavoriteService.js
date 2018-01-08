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