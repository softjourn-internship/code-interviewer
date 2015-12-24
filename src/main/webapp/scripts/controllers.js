/* Controllers Admin*/
var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource']); 
var myAppModule = angular.module('MyApp', ['ui.ace']);

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {
    $http.get('clients/clients.json').success(function(data) {
      $scope.clients = data;
    });
  }]);

adminPanelApp.controller('ClientsProfileCtrl', ['$scope', '$http', '$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
        $scope.clientId = $routeParams.clientId;

        var url = 'clients/'+$routeParams.clientId+'.json';
        $http.get(url).success(function(data) {
          $scope.client = data;
        });
  }]);

/* Controllers UsersWorkspace*/



myAppModule.controller('SelectTaskCtrl', function($scope,$http){
  $scope.NumberTask=1;
  $http.get("Data/Tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first;}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}});
  $scope.ShowTask=function(){
    $http.get("Data/Tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first; console.log($scope.TaskShow);}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}

  });
}
    $scope.TaskListVisible=true;
});

// config Admin Panel

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