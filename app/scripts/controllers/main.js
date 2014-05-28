'use strict';

angular.module('meanPhonebookApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/person').success(function(persons) {
      $scope.allPersons = persons;
      $scope.ordering = 'lastName';
    });
  })

  .controller('AddPersonCtrl', function ($scope, $http) {
    $scope.demo = 'hello';
  });
