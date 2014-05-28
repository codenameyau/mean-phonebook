'use strict';

angular.module('meanPhonebookApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.logo = 'Mean Phonebook';
    $scope.menu = [
      {'icon': 'home', 'link': '/'},
      {'icon': 'plus', 'link': '/add'}
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
