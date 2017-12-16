(function () {
    'use strict';

    angular.module(APPNAME)
		.component('viewHours', {
		    templateUrl: '../Scripts/components/view-hours/_main.html',
		    controller: 'viewController'
		});

    angular.module(APPNAME)
		.controller('viewController', viewController);

    viewController.$inject = ['hoursService'];

    function viewController(hoursService) {
        var vm = this;


        // hold all the calculations performed on entries in the table
        vm.hours = {
            total: null,
            direct: null,
            indirect: null,
            supervision: null
        };
        vm.table = hoursService.table; // store the hours entries
        vm.getHours = _getHours;
        vm.$onInit = _getHours();


        function _getHours() {
            hoursService.getAllEntries()
                .then(_complete, error => console.error(error));

            function _complete(response) {
                vm.table = response.data;

                for (let i = 0; i < vm.table.length; i++) {
                    vm.hours.total += vm.table[i].TotalHoursWorked;
                    vm.hours.direct += vm.table[i].DirectClientContact;
                    vm.hours.indirect += vm.table[i].IndirectClientHours;
                    vm.hours.supervision += vm.table[i].SupervisionHours;
                }
            }
        }
    }
})();