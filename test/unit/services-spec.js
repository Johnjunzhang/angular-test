'use strict';

describe('app service', function(){

    beforeEach('myApp.services');

    it('should get app', inject(function($httpBackend, app){

        $httpBackend.whenGET(/app.json/).respond({version:'TEST_VER'});

        var promise = app;
        promise.then(function(response){
           expect(response.data.version).toEqual('TEST_VER');
        });
    }));
});