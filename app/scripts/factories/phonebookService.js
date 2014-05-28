'use strict';

angular.module('meanPhonebookApp')

  .service('phonebookService', function ($http) {

    var API = '/api/';

    this.getAllPersons = function() {
      return $http.get(API + 'person');
    };

    this.addNewPerson = function(person) {
      return $http.post(API + 'person', person);
    };

  });
