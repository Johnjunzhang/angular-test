'user strict';


angular.module('myApp.directives', [])
    .directive('appVersion', function(){
        return function(scope, element, attr){
            element.text('1.0.0');
        };
    });