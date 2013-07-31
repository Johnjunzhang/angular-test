'user strict';


angular.module('myApp.directives', ['myApp.services'])
    .directive('appVersion', ['app',function(app){
        return function(scope, element, attr){
            element.text(app.version);
        };
    }]);