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
                    vm.hours.direct += vm.table[i].DirectClientContact;
                    vm.hours.indirect += vm.table[i].IndirectClientHours;
                    vm.hours.supervision += vm.table[i].SupervisionHours;
                }

                vm.hours.total = vm.hours.direct + vm.hours.indirect;

                _generatePie();
            }
        }

        function _generatePie() {
            let pie = new d3pie('pie', {
                labels: {
                    mainLabel: {
                        color: '#FFFFFF',
                        fontSize: 16
                    },
                    percentage: {
                        fontSize: 16
                    }
                },
                data: {
                    content: [
						{ label: 'Direct', value: vm.hours.direct },
						{ label: 'Indirect', value: vm.hours.indirect }
                    ]
                },
                callbacks: {
                    onMouseoverSegment: function (info) {
                        console.log('mouse in', info);
                    },
                    onMouseoutSegment: function (info) {
                        console.log('mouse out', info);
                    }
                }
            });
        }
    }
})();