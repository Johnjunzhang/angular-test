'use strict';

describe('date', function(){

    beforeEach(module('myApp.directives'));

    it("should show version", inject(function($compile,$rootScope){
        var dateTemplate = '<date ng-model="newAttendee.date"/>';
        var element = $compile(dateTemplate)($rootScope);

        $(element).val('11-11-11');
        $(element).trigger('input');

        expect($rootScope.newAttendee.date).toEqual('11-11-11');
    }));

    it("should return false given date in registerCourseForm is not valid", inject(function($compile, $rootScope){
        var dateTemplate = '<form name="registerCourseForm"><date ng-model="newAttendee.date"/></form>';
        var element = $compile(dateTemplate)($rootScope);

        $(element).val('invalid');
        $(element).trigger('input');

        expect($rootScope.registerCourseForm.$inValid).toBeFalsy();
    }));
});