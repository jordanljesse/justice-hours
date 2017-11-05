(function() {
	'use strict';

	angular.module(APPNAME)
		.service('hoursService', hoursService);

	hoursService.$inject = [];

	function hoursService() {
		var svc = this;

		svc.table = [
			{
				week: 1,
				date: '10/30/2017 - 12/07/2017',
				total: 40,
				direct: 20,
				indirect: 15,
				supervision: 5
			},
			{
				week: 2,
				date: '12/07/2017 - 12/14/2017',
				total: 37,
				direct: 20,
				indirect: 12,
				supervision: 5
			},
			{
				week: 3,
				date: '12/14/2017 - 12/22/2017',
				total: 43,
				direct: 23,
				indirect: 15,
				supervision: 5
			}
		];

		svc.addRow = _addRow;
		svc.removeRow = _removeRow;
		svc.getTotalHours = _getTotalHours;
		svc.getSupervisionTotal = _getSupervisionTotal;
		svc.getDirectTotal = _getDirectTotal;
		svc.getIndirectTotal = _getIndirectTotal;

		function _addRow(entry) {
			svc.table.push(entry);
		}

		function _removeRow(entryIndex){
			svc.table.splice(entryIndex, 1);
		}

		function _getTotalHours() {
			var sum = 0;

			svc.table.forEach(function(row) {
				sum += row.total;
			});

			return sum;
		}

		function _getSupervisionTotal() {
			var sum = 0;

			svc.table.forEach(function(row) {
				sum += row.supervision;
			});

			return sum;
		}

		function _getDirectTotal() {
			var sum = 0;

			svc.table.forEach(function(row) {
				sum += row.direct;
			});

			return sum;
		}

		function _getIndirectTotal() {
			var sum = 0;

			svc.table.forEach(function(row) {
				sum += row.indirect;
			});

			return sum;
		}
	}
})();