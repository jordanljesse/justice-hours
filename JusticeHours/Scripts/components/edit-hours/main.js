(function () {
    'use strict';

    angular.module(APPNAME)
        .component('editHours', {
            templateUrl: '../Scripts/components/edit-hours/_main.html',
            controller: 'hoursController',
            controllerAs: 'vm'
        });

    angular.module(APPNAME)
        .controller('hoursController', hoursController);

    hoursController.$inject = ['hoursService'];

    function hoursController(hoursService) {
        var vm = this;

        // data from input form
        vm.form = {
            id: null,
            week: null,
            date: null,
            totalHoursWorked: null,
            directClientContact: null,
            indirectClientHours: null,
            supervisionHours: null,
            explanationOfSce: null
        };
        vm.hoursArray = hoursService.hoursArray; // data from server
        vm.getAll = _getAll;
        vm.$onInit = _getAll();
        vm.clearForm = _clearForm;

        function _getAll() {
            hoursService.getAll()
                .then(response => vm.hoursArray = response.data, error => console.error(error));
        }

        function _create() {
            hoursService.create(vm.form);
        }

        function _clearForm() {
            vm.form = null;
        }

    }
})();