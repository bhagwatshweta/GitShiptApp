/**
 * Created by gauravshinde on 9/15/17.
 */
describe('userService', function() {
    var userService, httpBackend;
    beforeEach(function() {
        module('shiptApp');
        inject(function ($httpBackend, userService) {
            githubAPIService = userService;
            httpBackend = $httpBackend;
        });
    });
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('GitHub users API HTTP call should get user details', function () {

        var returnData = {status: 200, user: "bhagwatshweta"};
        httpBackend.expectGET("https://api.github.com/users/bhagwatshweta").respond(returnData);
        var returnedPromise = userService.getUserDetail("bhagwatshweta");
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });
    it('GitHub user followers API should get user followers', function () {

        var returnData = {status: 200, user: "bhagwatshweta"};
        httpBackend.expectGET("https://api.github.com/users/bhagwatshweta/followers?page=1").respond(returnData);
        var returnedPromise = userService.getFollowers("bhagwatshweta", 1);
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

});
