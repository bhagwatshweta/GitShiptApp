/**
 * Created by gauravshinde on 9/15/17.
 */
angular.module('shiptApp')
    .factory('userService', function($http, $log) {
        var getUserDetail = function(userName) {

            return $http({method:"GET", url:"https://api.github.com/users/" + userName})
                .then(function (data) {
                    $log.info("successful --> getUserDetail() ");
                    return data;
                })

        };

        var getFollowers = function(userName, page) {
            return $http({method:"GET", url:"https://api.github.com/users/" + userName + "/followers?page=" + page })
                .then(function(data){
                    $log.info("successful --> getFollowers()");
                    return data;
                })

        }
        return { getUserDetail: getUserDetail, getFollowers: getFollowers };
    });