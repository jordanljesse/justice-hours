(function() {
	'use strict';

	angular.module(APPNAME)
		.component('userLogin',{
			templateUrl: 'Scripts/components/user-login/_main.html',
			controller: 'userLoginController',
			controllerAs: 'vm'
		});

	angular.module(APPNAME)
		.controller('userLoginController', userLoginController);

	userLoginController.$inject = [];

	function userLoginController() {
		var vm = this;

		// track when to show registration form
		vm.registerMode = false;

		vm.loginForm = {
			login: null,
			password: null
		};	

		vm.registerForm = {
			fullName: null,
			userName: null,
			email: null,
			password: null
		};

		vm.toggleRegister = _toggleRegister;

		function _toggleRegister() {
			vm.registerMode = !vm.registerMode;
		}
	}
})();