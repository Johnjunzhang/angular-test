'use strict';

angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1',
        {
            templateUrl: 'partials/courses.html',
            controller: 'CoursesController'
        });
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
