(function () {
    'use strict';

    angular.module(APPNAME)
        .component('editHours', {
            templateUrl: '../Scripts/components/edit-hours/_main.html',
            controller: 'hoursController'
        });

    angular.module(APPNAME)
        .controller('hoursController', hoursController);

    hoursController.$inject = ['hoursService'];

    function hoursController(hoursService) {
        var vm = this;


        // an 'hours' entry looks like this:
        vm.form = {
            id: null, // autogenerated by server
            week: null,
            date: null,
            totalHoursWorked: null,
            directClientContact: null,
            indirectClientHours: null,
            supervisionHours: null,
            explanationOfSce: null
        };
        vm.hoursArray = [];
        vm.getAllEntries = _getAllEntries;
        vm.clearForm = _clearForm;
        vm.editEntry = _editEntry;
        vm.deleteEntry = _deleteEntry;
        vm.$onInit = _getAllEntries();


        function _getAllEntries() {
            hoursService.getAllEntries()
                .then(response => vm.hoursArray = response.data, error => console.error(error));
        }

        function _createEntry() {
            hoursService.createEntry(vm.form);
        }

        function _editEntry(entry) {
            vm.form = entry;
        }

        function _clearForm() {
            vm.form = null;
        }

        // TODO: implement method to update an entry
        function _updateEntry() {
            console.log('vm.updateEntry has fired');
        }

        function _deleteEntry(id, $event) {
            $event.stopPropagation();
            hoursService.deleteEntry(id);
        }
    }
})();