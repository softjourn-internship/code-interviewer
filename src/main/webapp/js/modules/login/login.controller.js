app.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService', 'UserService',
    function ($scope, $rootScope, $location, AuthenticationService, UserService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);

                    // ROLE
                    $location.path('/dashboard');
                    $scope.dataTable = 'participants';
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);