'use strict';

app.controller('LoginCtrl', function ($scope, $location, Login) {
  $scope.adminSideBar = false;

  $scope.successCallback = function ($scope, response) {
    $location.path('/dashboard/participants');
    $scope.adminSideBar = true;
  }

  $scope.errorCallback = function (response) {
    alert(response.status);
  }

  $scope.authentication = function() {
    var dataLogin = { username: $scope.username, password: $scope.password }
    Login.auth(dataLogin, $scope.successCallback, $scope.errorCallback);
  }
});

