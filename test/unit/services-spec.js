'use strict';

describe('app service', function(){

    beforeEach(module('myApp.services'));

    it('should get app', inject(function($httpBackend, app){

        $httpBackend.whenGET(/app/).respond({version:'TEST_VER'});

        var promise = app.get();
        promise.then(function(response){
           expect(response.data.version).toEqual('TEST_VER');
        });
        $httpBackend.flush();
    }));

    it('should get app', inject(function($httpBackend, app){

        $httpBackend.whenGET(/app/).respond({version:'TEST_VER'});

        var promise = app.get();
        promise.then(function(response){
            expect(response.data.version).toEqual('TEST_VER');
        });

        $httpBackend.flush();
    }));
});