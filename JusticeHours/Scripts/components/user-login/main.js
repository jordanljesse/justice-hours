(function () {
    'use strict';

    angular.module(APPNAME)
        .component('userLogin', {
            templateUrl: '../Scripts/components/user-login/_main.html',
            controller: 'userLoginController'
        });

    angular.module(APPNAME)
        .controller('userLoginController', userLoginController);

    userLoginController.$inject = [];


    function userLoginController() {
        var vm = this;


        vm.loginForm = {
            loginEmail: null,
            loginPassword: null
        };
        vm.registerForm = {
            registerEmail: null,
            registerPassword: null,
            confirmPassword: null
        };
        vm.registerMode = false;
        vm.toggleRegister = _toggleRegister;


        function _toggleRegister() {
            vm.registerMode = !vm.registerMode;
        }
    }
})();