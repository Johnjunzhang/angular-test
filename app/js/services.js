'use strict';

angular.module('myApp.services', [])
    .factory('app', ['$http', function ($http) {
        return {
            get: function () {
                return $http.get('data/app.json').success(function (data) {
                    return data;
                }).error(function (data, status) {
                    });
            }
        }
    }]);