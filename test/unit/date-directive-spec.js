'use strict';

describe('date', function(){

    beforeEach(module('myApp.directives'));

    it("should valid date", inject(function($compile,$rootScope){
        var dateTemplate = '<date ng-model="newAttendee.date"/>';
        var element = $compile(dateTemplate)($rootScope);
        element.val('1ss1-11-11');
        $rootScope.$digest();
        expect($rootScope.$valid).toBeTruthy();
    }));
});