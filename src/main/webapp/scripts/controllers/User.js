adminPanelApp.controller('UserCtrl', ['$scope', '$http','$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
    $http.get('api/users/current').success(function(data) {

      $scope.user = data;
      $scope.username = $routeParams.username;
      if (data.role === 'ROLE_ADMIN') {
          $scope.usersVisible = true;
          $scope.dashboardVisible = false;
          $scope.tasksVisible = false;
          $scope.statisticsVisible = false;
          $location.path('/data/users');
        }
      if (data.role === 'ROLE_MANAGER') {
          $scope.dataTable = 'participants';
          $scope.usersVisible = false;
          $scope.dashboardVisible = true;
          $scope.tasksVisible = true;
          $scope.statisticsVisible = true;
          $location.path('/data/participants');
       }
      if (data.role === 'ROLE_RECRUITER') {
          $scope.usersVisible = false;
          $scope.dashboardVisible = true;
          $scope.tasksVisible = true;
          $scope.statisticsVisible = false;
      };
    });
}]);
