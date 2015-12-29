var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource','googlechart','ui.ace']);
var myAppModule = angular.module('MyApp', ['ui.ace']);

/* Controllers Admin*/
/************************************************************************************/

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {
    $http.get('clients/clients.json').success(function(data) {
      $scope.clients = data;
    });
  }]);

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

  //TASKS

  adminPanelApp.controller('TasksCtrl',['$scope','$http',function ($scope,$http){
    $scope.Visible=true;
    $http.get("data/AllTasks.json").then(function (response) {
      $scope.allTasks=response.data;

    });

    $scope.buttonTbox;
    $scope.CreateOrChangeTask=function(buttonTitle) {
      $scope.buttonTbox=buttonTitle;
    }
    $scope.changeFrame=function(taskId) {
      if(taskId!='empty'){
        for(var i=0;i<$scope.allTasks.length;i++){
        var obj = $scope.allTasks[i];
        if(taskId==i){
          $scope.titleTaskC=obj.title;
          $scope.diffTaskC=obj.level;
          $scope.techTaskC=obj.language;
          $scope.TaskC=obj.task;
      }
    }
  }
  else{
    $scope.titleTaskC='';
    $scope.diffTaskC='';
    $scope.techTaskC='';
    $scope.TaskC='';
  }
    $scope.Visible=!$scope.Visible;
  }

}]);

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
        .
        when('/statistics', {
            templateUrl: 'template/statistics.html',
            controller: 'ClientsChartsCtrl'
         })

         .when('/tasks', {
             templateUrl: 'template/tasks.html',
             controller: 'TasksCtrl'
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
  $scope.logg=function() {
    console.log("d");
  }
  $scope.ShowTask=function(){
    $http.get("data/tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first; console.log($scope.TaskShow);}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}

  });
}
    $scope.TaskListVisible=true;
});
