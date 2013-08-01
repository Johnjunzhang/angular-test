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

});