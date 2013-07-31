describe("attendee display name", function(){

    beforeEach(module('myApp.filters'));
    it("should combine name and email", inject(function(attendeeDisplayNameFilter){
        var attendee = {name: 'name', email: 'email'};
        expect(attendeeDisplayNameFilter(attendee)).toEqual('name(email)');
    }));

    it("should combine name and email", inject(function($filter){
        var attendee = {name: 'name', email: 'email'};
        expect($filter('attendeeDisplayName')(attendee)).toEqual('name(email)');
    }));
});