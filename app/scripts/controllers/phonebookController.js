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
          if (status === 201) {
            console.log(data);
            $location.path('/');
          }
        });
    };
  })

  .controller('LookupCtrl', function($scope, $routeParams, $location, phonebookService) {
    // Lookup person related information
    var phoneNumber = $routeParams.phoneNumber;
    phonebookService.getPerson(phoneNumber)
      .success(function(data) {
        $scope.entry = data[0];
      });

    // Event handler: remove person button
    $scope.removePerson = function() {
      phonebookService.removePerson(phoneNumber)
        .success(function() {
          $location.path('/');
        });
    };

    // Event handler: update person button
    $scope.updatePerson = function() {

    };
  });
