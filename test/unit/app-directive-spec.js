'use strict';

describe('app-version', function(){

    beforeEach(module('myApp.directives'));

    it("should show version", inject(function($compile,$rootScope, $httpBackend){
        $httpBackend.whenGET(/app.json/).respond({version:'TEST_VER'});
        var dateTemplate = '<span app-version></span>"/>';
        var element = $compile(dateTemplate)($rootScope, $httpBackend);
        $httpBackend.flush();
        expect(element.text()).toEqual('TEST_VER');
    }));

    it("should show version", function(){
        module(function($provide){
            $provide.factory('app',function(){return {version:'Test_Version'}});
        });
        inject(function($compile,$rootScope){
            var dateTemplate = '<span app-version></span>"/>';
            var element = $compile(dateTemplate)($rootScope);

            expect(element.text()).toEqual('Test_Version');
        });
    });

});
