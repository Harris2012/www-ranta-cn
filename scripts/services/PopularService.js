function PopularService($resource, $q) {

    var resource = $resource('data/populars.json', {}, {
        getData: { method: 'GET', url: 'data/populars.json', isArray: true }
    });

    return {
        populars: function () {
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