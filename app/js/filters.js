'use strict';

angular.module('myApp.filters',[])
       .filter('attendeeDisplayName', function(){
        return function(attendee){
            return attendee.name + '('+ attendee.email +')';
        };
    });