'use strict';

describe('date', function(){

    beforeEach(module('myApp.directives'));

    xit("should show version", inject(function($compile,$rootScope){
        var dateTemplate = '<date ng-model="newAttendee.date"/>';
        var element = $compile(dateTemplate)($rootScope);
        //jasmine.
        expect(element.val()).toEqual('11-11-11');
        expect($rootScope.newAttendee.date).toEqual('11-11-11');
    }));
});