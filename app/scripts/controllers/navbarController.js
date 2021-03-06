'use strict';

angular.module('meanPhonebookApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.logo = 'MEAN Phonebook';
    $scope.menu = [
      {'icon': 'search', 'link': '/'},
      {'icon': 'plus', 'link': '/add'}
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
