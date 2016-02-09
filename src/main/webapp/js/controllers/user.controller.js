app.controller('UserController',
    ['$scope', '$location', 'UserService',
    function ($scope, $location, UserService) {

        var currentUser = function (response) {
            $scope.user = response.data;
        }

        UserService.GetById(1, currentUser);
        
        $scope.logOut = function () {
            $location.path('/login');
        };

    }]);