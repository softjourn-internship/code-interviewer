/* Controllers */
var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource']); 

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {
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
        .
        when('/clients/:clientId', {
            templateUrl: 'template/profile.html', 
            controller: 'ClientsProfileCtrl'
         })
        .otherwise({
          redirectTo: '/'
        });
  }
]);

adminPanelApp.controller('ClientsProfileCtrl', ['$scope', '$http', '$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
        $scope.clientId = $routeParams.clientId;

        var url = 'clients/'+$routeParams.clientId+'.json';
        $http.get(url).success(function(data) {
          $scope.client = data;
        });
  }]);