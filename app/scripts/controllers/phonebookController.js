'use strict';

angular.module('meanPhonebookApp')

  .controller('HomepageCtrl', function($scope, phonebookService) {
    phonebookService.getAllPersons()
      .success(function(persons) {
        $scope.allPersons = persons;
        $scope.ordering = 'lastName';
      });
  })

  .controller('AddPersonCtrl', function($scope, $location, phonebookService) {
    // Event handler for submit button
    $scope.addPerson = function() {
      phonebookService.addNewPerson($scope.entry)
        .success(function(data, status) {
          // Replace with alert
          console.log(data + ' ' + status);
          $location.path('/');
        });
    };

  })

  .controller('LookupCtrl', function($scope, $location, phonebookService) {

  });
