'use strict';

angular.module('myApp.services',[])
    .factory('app',function(){
       return {
           'version': '1.0.0'
       };
    });