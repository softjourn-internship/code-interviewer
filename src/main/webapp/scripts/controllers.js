var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource','googlechart']); 
var myAppModule = angular.module('MyApp', ['ui.ace']);

/* Controllers Admin*/
/************************************************************************************/

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {

    $http.get('clients/clients.json').success(function(data) {
      $scope.clients = data;
    });
  }]);

adminPanelApp.controller('loginCtrl',function($scope, $location) {
    document.getElementById("header").style.display = "none";
    document.getElementById("container").style.display = "none";

    $scope.sumbit = function() {
      var username = $scope.username;
      var password = $scope.password;
      // alert(""+$scope.username);
      if(username == 'admin' && password =='admin'){
        // window.location.hash = '#/dashboard';
        $location.path('/dashboard');

        document.getElementById("header").style.display = "block";
        document.getElementById("container").style.display = "block";
      }
      else alert("Wrong staff");
    };
});
// CHARTS

adminPanelApp.controller('ClientsChartsCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {
    $http.get('data/chart-pie.json').success(function(data) {
      $scope.chartPie = data;
    });
    $http.get('data/chart-column.json').success(function(data) {
      $scope.chartColumn = data;
    });
    $http.get('data/chart-line.json').success(function(data) {
      $scope.chartLine = data;
    });

  }]);

// PROFILE
adminPanelApp.controller('ClientsProfileCtrl', ['$scope', '$http', '$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
        $scope.clientId = $routeParams.clientId;

        var url = 'clients/'+$routeParams.clientId+'.json';
        $http.get(url).success(function(data) {
          $scope.client = data;
        });
  }]);
// config Admin Panel

adminPanelApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider){
    $routeProvide
        .when('/',{
          templateUrl:'template/login.html',
          controller:'loginCtrl'
        })
        .when('/dashboard',{
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
        .
        when('/statistics', {
            templateUrl: 'template/statistics.html', 
            controller: 'ClientsChartsCtrl'
         })
        .otherwise({
          redirectTo: '/'
        });
  }
]);


/* Controllers UsersWorkspace*/
/************************************************************************************/

myAppModule.controller('SelectTaskCtrl', function($scope,$http){
  $scope.NumberTask=1;
  $http.get("data/tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first;}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}});
  $scope.ShowTask=function(){
    $http.get("data/tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first; console.log($scope.TaskShow);}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}

  });
}
    $scope.TaskListVisible=true;
});

