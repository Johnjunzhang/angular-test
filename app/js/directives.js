'user strict';


angular.module('myApp.directives', ['myApp.services'])
    .directive('appVersion', ['app',function(app){
        return function(scope, element, attr){
            app.then(function(response){
                var appConfig = response.data;
                element.text(appConfig.version);
            });
        };
    }])
    .directive('date',function(){
        return {
            replace: true,
            template: '<input type="text"/>',
            restrict: 'E',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                var currentFormat = "dd-mm-yy";
                element.bind('change input keyup', function(){
                    scope.$apply(setModelValue);
                });

                function setModelValue(){
                    ngModel.$setViewValue(element.val());
                }
                setModelValue();

                ngModel.$parsers.push(function(value){
                    var isValid = value.match(/[0-9]{2}-[0-9]{2}-[0-9]{2}$/);
                    ngModel.$setValidity('date',isValid);
                });
            }
        };
    });