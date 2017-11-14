(function () {
    'use strict';

    angular.module(APPNAME)
        .service('hoursService', hoursService);

    hoursService.$inject = ['$http'];

    function hoursService($http) {
        var svc = this;

        svc.hoursArray = [];
        svc.getAllEntries = _getAllEntries;
        svc.createEntry = _createEntry;

        function _getAllEntries() {
            return $http({
                url: '/api/hours',
                method: 'GET'
            });
        }

        function _createEntry(request) {
            return $http({
                url: '/api/hours',
                method: 'POST',
                data: request
            });
        }
    }
})();