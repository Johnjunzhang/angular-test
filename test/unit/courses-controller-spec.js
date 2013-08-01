describe("online courses", function(){
    var scope;
    var courses = [{'name':'course'}];
    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function($controller, $httpBackend, $rootScope){
          scope = $rootScope.$new();
          $httpBackend.whenGET(/courses/).respond(courses);
          $controller('CoursesController', {
            $scope: scope

          });
          $httpBackend.flush();
    }));

   it("should get current courses when initialize controller", function(){
        expect(scope.currentCourses).toEqual(courses);
   });

   it("should register to a course given a name and course name", function(){
       var newAttendee = {name:'new attendee', course: 'c#'};
       scope.register(newAttendee);
       expect(scope.attendees.length).toEqual(1);
       expect(scope.attendees[0]).toEqual(newAttendee);
   })
});