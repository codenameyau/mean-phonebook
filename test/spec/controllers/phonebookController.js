'use strict';

/* Tests fail due to animations,
 * comment out ngAnimate in app.js */
describe('Controller: HomepageCtrl', function () {

  // load the controller's module
  beforeEach(module('meanPhonebookApp'));

  // Include controller, mock scope and httpBackend
  var HomepageCtrl, scope, $httpBackend;

  // Initialize the controller and mock http expect
  beforeEach(inject(function($injector, $controller, $rootScope) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.expectGET('/api/person')
      .respond([
        {
          'firstName': 'John',
          'lastName': 'Smith',
          'phoneNumber': '123-456-7890',
          'zipcode': '10001'
        },
        {
          'firstName': 'Mary',
          'lastName': 'Json',
          'phoneNumber': '123-123-5632',
          'zipcode': '01102'
        }
      ]);
    scope = $rootScope.$new();
    HomepageCtrl = $controller('HomepageCtrl', {$scope: scope});
  }));

  it('should attach a list of all persons to the scope', function () {
    expect(scope.allPersons).toBeUndefined();
    $httpBackend.flush();
    expect(scope.allPersons.length).toBe(2);
    expect(scope.allPersons[0].firstName).toEqual('John');
    expect(scope.allPersons[0].lastName).toEqual('Smith');
    expect(scope.allPersons[1].phoneNumber).toEqual('123-123-5632');
    expect(scope.allPersons[1].zipcode).toEqual('01102');
  });

  it('should check all items in person should be of type string', function () {
    expect(scope.allPersons).toBeUndefined();
    $httpBackend.flush();
    expect(typeof scope.allPersons[0].firstName).toEqual('string');
    expect(typeof scope.allPersons[0].lastName).toEqual('string');
    expect(typeof scope.allPersons[0].phoneNumber).toEqual('string');
    expect(typeof scope.allPersons[0].zipcode).toEqual('string');
  });

  it('should expected scope ordering to be set to lastName asc', function () {
    $httpBackend.flush();
    expect(scope.ordering).toEqual('lastName');
  });
});


describe('Controller: AddPersonCtrl', function () {

  // load the controller's module
  beforeEach(module('meanPhonebookApp'));

  // Include controller, mock scope and httpBackend
  var AddPersonCtrl, scope, $location;

  // Initialize the controller and mock http expect
  beforeEach(inject(function($injector, $controller, $httpBackend, $rootScope) {
    $httpBackend = $injector.get('$httpBackend');
    $location = $injector.get('$location');
    $location.url('/add');
    $httpBackend.expectGET('/api/person')
      .respond('Created', 201);
    scope = $rootScope.$new();
    AddPersonCtrl = $controller('AddPersonCtrl', {$scope: scope});
  }));

  it('should expect the location to be at /add', function () {
    expect($location.path()).toBe('/add');
  });

  it('should expect submitEntryButton to be defined', function () {
    expect(typeof scope.submitEntryButton).toBe('function');
  });
});


describe('Controller: LookupCtrl', function () {

  // load the controller's module
  beforeEach(module('meanPhonebookApp'));

  // Include controller, mock scope and httpBackend
  var LookupCtrl, scope, $httpBackend, $location;
  var phoneTest = '123-456-7890';

  // Initialize the controller and mock http expect
  beforeEach(inject(function ($injector, $controller, $rootScope) {
    $location = $injector.get('$location');
    $location.url('/lookup/' + phoneTest);
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', '/api/person/' + phoneTest)
      .respond([
        {
          'firstName': 'John',
          'lastName': 'Smith',
          'phoneNumber': '123-456-7890',
          'zipcode': '10001'
        }
      ]);
    scope = $rootScope.$new();
    LookupCtrl = $controller('LookupCtrl', {$scope: scope});
  }));

  it('should expect the url to contain a phoneNumber', function () {
    expect($location.path()).toBe('/lookup/' + phoneTest);
  });

});
