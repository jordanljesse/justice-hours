(function() {
	'use strict';

	angular.module(APPNAME)
		.config(configRoutes);

	configRoutes.$inject = ['$stateProvider'];

	function configRoutes($stateProvider) {

		// editHours component
		$stateProvider.state({
			name: 'edit-hours',
			url: '/edit',
			component: 'editHours'
		});

		// viewHours component
		$stateProvider.state({
			name: 'view-hours',
			url: '/view',
			component: 'viewHours'
		});

		// userLogin component
		$stateProvider.state({
			name: 'user-login',
			url: '/login',
			component: 'userLogin'
		});
	}
})();