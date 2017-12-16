(function () {
    'use strict';

    angular.module(APPNAME)
		.component('viewHours', {
		    templateUrl: '../Scripts/components/view-hours/_main.html',
		    controller: 'viewController',
		    controllerAs: 'vm'
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
        vm.getTotalHours = _getTotalHours;
        vm.getSupervisionTotal = _getSupervisionTotal;
        vm.getDirectTotal = _getDirectTotal;
        vm.getIndirectTotal = _getIndirectTotal;
        vm.$onInit = _getTotalHours();
        vm.$onInit = _getSupervisionTotal();
        vm.$onInit = _getDirectTotal();
        vm.$onInit = _getIndirectTotal();


        function _getTotalHours() {
            vm.hours.total = hoursService.getTotalHours();
        }

        function _getSupervisionTotal() {
            vm.hours.supervision = hoursService.getSupervisionTotal();
        }

        function _getDirectTotal() {
            vm.hours.direct = hoursService.getDirectTotal();
        }

        function _getIndirectTotal() {
            vm.hours.indirect = hoursService.getIndirectTotal();
        }
    }
})();