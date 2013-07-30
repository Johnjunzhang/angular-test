'use strict';

angular.module('myApp.controllers', []).
  controller('ViewController', ['$scope',function($scope) {
       $scope.cssProperties = ["margin",'padding','position'];

  }]);