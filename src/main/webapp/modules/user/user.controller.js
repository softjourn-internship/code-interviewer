app.controller('UserController',
    ['$scope', '$location', 'UserService',
    function ($scope, $location, UserService) {

        var sidebarVisible = false;

        $scope.sidebarToggle = function() {
            var sidebar = angular.element(document.querySelector('#sidebarToggle'));
            if (sidebarVisible) {
                sidebar.css('left', 0);
                sidebarVisible = false;
            }
            else { sidebar.css('left', '180px'); sidebarVisible = true;}
        }

        window.onresize = function(event) {
            var sidebar = angular.element(document.querySelector('#sidebarToggle'));
            if(window.innerWidth > 767) {
                sidebar.css('left', '180px');
            }
            else {sidebar.css('left', 0); sidebarVisible = false;}
        }

        var currentUser = function (response) {
            $scope.user = response.data;
        }

        UserService.GetById(1, currentUser);
        $scope.dataTable = 'participants';
        $scope.logOut = function () {
            $location.path('/login');
        };

    }]);