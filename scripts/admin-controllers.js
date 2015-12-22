/* Controllers */
var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource']); 

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('clients/clients.json').success(function(data) {
      $scope.clients = data;
    });
  }]);

adminPanelApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider){
    $routeProvide
        .when('/',{
          templateUrl:'template/dashboard.html',
          controller:'ClientsListCtrl'
        })
        .when('/participants',{
          templateUrl:'template/participants.html',
          controller:'ClientsListCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  }
]);