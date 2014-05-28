'use strict';

angular.module('meanPhonebookApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'HomepageCtrl'
      })

      .when('/add', {
        templateUrl: 'partials/add',
        controller: 'AddPersonCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
