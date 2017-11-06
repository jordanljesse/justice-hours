(function () {
    'use strict';

    angular.module(APPNAME)
        .service('hoursService', hoursService);

    hoursService.$inject = ['$http'];

    function hoursService($http) {
        var svc = this;

        svc.hoursArray = [];
        svc.getAll = _getAll;
        svc.create = _create;

        function _getAll() {
            return $http({
                url: '/api/hours',
                method: 'GET'
            });
        }

        function _create(request) {
            return $http({
                url: '/api/hours',
                method: 'POST',
                data: request
            });
        }
    }
})();