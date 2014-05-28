'use strict';

angular.module('meanPhonebookApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/person').success(function(persons) {
      $scope.allPersons = persons;
    });
  });
