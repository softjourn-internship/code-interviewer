app.controller('DashboardCtrl',
    ['$scope', '$location', 'UserService', 'ngDialog',
    function ($scope, $location, UserService, ngDialog) {

        var currentUser = function (response) {
            $scope.user = response.data;
        }

        UserService.GetById(1, currentUser);
        $scope.dataTable = 'participants';
        $scope.logOut = function () {
            $location.path('/login');
        };

        $scope.addDialog = function () {
            ngDialog.open({ template: 'js/modules/dashboard/dialog.data.template.html'});
        };

    }]);