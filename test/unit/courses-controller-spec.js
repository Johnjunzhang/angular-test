describe("online courses", function(){
    var scope;

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        $controller('CoursesController', {
            $scope: scope
        })
    }));

    it("should load current courses when initialize controller", function(){
        expect(scope.currentCourses.length).toBe(1);
        expect(scope.currentCourses[0].name).toBe('javascript')
        expect(scope.currentCourses[0].online).toBe('2013/07/30')
    });
});