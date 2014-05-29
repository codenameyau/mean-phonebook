'use strict';

angular.module('meanPhonebookApp')

  .service('phonebookService', function ($http) {

    // Base url for API calls
    var API = '/api/';

    // [GET] all persons
    this.getAllPersons = function() {
      return $http.get(API + 'person');
    };

    // [POST] new person
    this.addNewPerson = function(person) {
      return $http.post(API + 'person', person);
    };

    // [GET] one person by phone number
    this.getPerson = function(phone) {
      return $http.get(API + 'person/' + phone);
    };

    // [PUT] update person by phone number
    this.updatePerson = function(phone, entry) {
      return $http.put(API + 'person/' + phone, entry);
    };

    // [DELETE] person
    this.removePerson = function(phone) {
      return $http.delete(API + 'person/' + phone);
    };

  });
