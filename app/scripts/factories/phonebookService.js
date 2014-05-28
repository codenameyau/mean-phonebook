'use strict';

angular.module('meanPhonebookApp')

  .service('phonebookService', function ($http) {

    var API = '/api/';

    // [GET] all persons
    this.getAllPersons = function() {
      return $http.get(API + 'person');
    };

    // [GET] one person by phone number
    this.getPerson = function(phone) {
      return $http.get(API + 'person/' + phone);
    };

    // [POST] new person
    this.addNewPerson = function(person) {
      return $http.post(API + 'person', person);
    };

  });
