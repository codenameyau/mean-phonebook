'use strict';

angular.module('meanPhonebookApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'HomepageCtrl'
      })

      .when('/add', {
        templateUrl: 'partials/entryform',
        controller: 'AddPersonCtrl'
      })

      .when('/lookup/:phoneNumber', {
        templateUrl: 'partials/lookup',
        controller: 'LookupCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
