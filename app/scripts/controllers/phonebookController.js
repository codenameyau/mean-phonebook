'use strict';

angular.module('meanPhonebookApp')

  .controller('HomepageCtrl', function ($scope, phonebookService) {
    phonebookService.getAllPersons()
      .success(function(persons) {
        $scope.allPersons = persons;
        $scope.ordering = 'lastName';
      });
  })

  .controller('AddPersonCtrl', function ($scope) {
    $scope.demo = 'hello';
  });
