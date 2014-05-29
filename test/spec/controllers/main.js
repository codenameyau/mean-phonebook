'use strict';

describe('Controller: HomepageCtrl', function () {

  // load the controller's module
  beforeEach(module('meanPhonebookApp'));

  // Include controller, mock scope and httpBackend
  var HomepageCtrl, scope, $httpBackend;

  // Initialize the controller and mock http expect
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
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
    HomepageCtrl = $controller('HomepageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of persons to the scope', function () {
    expect(scope.allPersons).toBeUndefined();
    $httpBackend.flush();
    expect(scope.allPersons.length).toBe(2);
    expect(scope.allPersons[0].firstName).toEqual('John');
    expect(scope.allPersons[1].firstName).toEqual('Mary');
  });
});
