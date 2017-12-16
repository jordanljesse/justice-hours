(function () {
    'use strict';

    angular.module(APPNAME)
        .service('hoursService', hoursService);

    hoursService.$inject = ['$http'];

    function hoursService($http) {
        var svc = this;


        svc.hoursArray = [];
        svc.createEntry = _createEntry;
        svc.getAllEntries = _getAllEntries;
        svc.updateEntry = _updateEntry;
        svc.deleteEntry = _deleteEntry;


        function _createEntry(request) {
            return $http({
                url: '/api/hours',
                method: 'POST',
                data: request
            });
        }

        function _getAllEntries() {
            return $http({
                url: '/api/hours',
                method: 'GET'
            });
        }

        function _updateEntry(id, request) {
            return $http({
                url: '/api/hours/' + encodeURIComponent(id),
                method: 'PUT',
                data: request
            });
        }

        function _deleteEntry(id) {
            return $http({
                url: '/api/hours/' + encodeURIComponent(id),
                method: 'DELETE'
            });
        }
    }
})();