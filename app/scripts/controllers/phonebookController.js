'use strict';

angular.module('meanPhonebookApp')

  .controller('HomepageCtrl', function ($scope, phonebookService) {
    phonebookService.getAllPersons()
      .success(function(persons) {
        $scope.allPersons = persons;
        $scope.ordering = 'lastName';
      });
  })

  .controller('AddPersonCtrl', function ($scope, phonebookService) {
    // Event handler for submit button
    $scope.addPerson = function() {
      phonebookService.addNewPerson($scope.entry)
        .success(function(data, status) {
          console.log(status);
        });
    };
  });
