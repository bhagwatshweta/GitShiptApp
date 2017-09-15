/**
 * Created by gauravshinde on 9/15/17.
 */

angular.module("shiptApp", ['ngRoute'])
    .config( [ "$routeProvider", function ( $routeProvider ) {
        $routeProvider
            .when('/', {
                templateUrl: 'view1.html',
                controller: 'shiptCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .controller('shiptCtrl', function($scope, $location, $log, userService) {
        $scope.notFound = false;
        $scope.nextPayload = false;
        $scope.displayed = false;
        $scope.followersAvailable = false;
        var page = 1;

        $scope.triggerHTTPCall = function() {
            if((''+$scope.userName).length > 3)
                $scope.getUser();
        }
        $scope.getUser = function() {
            userService.getUserDetail($scope.userName).then(function(response){
                $scope.notFound = false;
                $scope.nextPayload = false;
                $scope.displayed = true;
                $scope.followersAvailable = false;
                $scope.userDetailsData = response.data;

                if(response.data.followers > 0) {
                    $scope.followersAvailable = true;
                    if(response.data.followers > 30 )
                        $scope.nextPayload = true;
                    else $scope.nextPayload = false;
                    userService.getFollowers($scope.userName, 1).then(function(response) {
                        $scope.followersList = response.data;
                    });
                }
                $log.info("successful --> getUser()");
            });
        };
        $scope.loadData = function() {
            page = page + 1;
            if(page >= $scope.userDetailsData.followers/30 ) {
                $scope.nextPayload = false;
            }
            else {
                var followers = userService.getFollowers($scope.userName, page);
                followers.then(function(response) {
                    $scope.followersAvailable = true;
                    $scope.followersList = response.data;
                    $log.info("successful --> loadData()");
                });
            }
        }
    });