(function(){
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

		// data from hours input form
		vm.form = {
			week: null,
			date: null,
			total: null,
			direct: null,
			indirect: null,
			supervision: null
		};

		// array of entries
		vm.table = hoursService.table;

		vm.addRow = _addRow;
		vm.clearForm = _clearForm;
		vm.editEntry = _editEntry;
		vm.deleteEntry = _deleteEntry;

		function _addRow() {
			var data = angular.copy(vm.form);
			hoursService.addRow(data);
			_clearForm();
		}

		function _clearForm() {
			vm.form = null;
		}

		function _editEntry(entry) {
			vm.form = entry;
		}

		function _deleteEntry(entryIndex, $event) {
			$event.stopPropagation();
			if(window.confirm('Are you sure you want to delete this entry?')){
				hoursService.removeRow(entryIndex);
			}
		}

	}
})();