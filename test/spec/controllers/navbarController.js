'use strict';

describe('Controller: NavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('meanPhonebookApp'));

  // Include controller
  var NavbarCtrl, scope, $location;

  // Initialize the controller
  beforeEach(inject(function($injector, $controller, $rootScope) {
    $location = $injector.get('$location');
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {$scope: scope});
  }));

  it('should expect that navbar isActive when same url location', function () {
    $location.url('/');
    expect($location.path()).toBe('/');
    expect(typeof scope.isActive).toBe('function');
    expect(scope.isActive('/')).toBe(true);
  });

  it('should expect that navbar isActive in different url', function () {
    $location.url('/add');
    expect($location.path()).toBe('/add');
    expect(scope.isActive('/add')).toBe(true);
  });

  it('should expect that navbar isActive is false in different urls', function () {
    $location.url('/');
    expect($location.path()).toBe('/');
    expect(scope.isActive('/add')).toBe(false);
    $location.url('/add');
    expect($location.path()).toBe('/add');
    expect(scope.isActive('/')).toBe(false);
  });

  it('should expect that navbar isActive is false if url is /lookup/', function () {
    var urlTest = '/lookup/123-456-7890';
    $location.url(urlTest);
    expect($location.path()).toBe(urlTest);
    expect(scope.isActive('/')).toBe(false);
    expect(scope.isActive('/add')).toBe(false);
  });

});
